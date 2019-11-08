const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const login = async (req, res) => {
        if (!req.body.matricula || !req.body.senha) {
            return res.status(400).send('Informe matrícula e senha!')
        }
        const usuario = await app.db('usuarios')
            .where({ matricula: req.body.matricula })
            .first()

        if (!usuario) {
            return res.status(400).send('Usuário não encontrado!')
        }

        const combinacao = bcrypt.compareSync(req.body.senha, usuario.senha)
        if (!combinacao) {
            return res.status(401).send('Matricula/senha inválidos')
        }

        const agora = Math.floor(Date.now() / 1000)

        const contToken = {
            matricula: usuario.matricula,
            nome: usuario.nome,
            email: usuario.email,
            admin: usuario.admin,
            iat: agora,
            exp: agora + (60 * 60 * 24 * 3)
        }
        res.json({
            ...contToken,
            token: jwt.encode(contToken, authSecret)
        })
    }
    const validarToken = async (req, res) => {
        const dadosUsuario = req.body || null
        try {
            if(dadosUsuario){
                const token = jwt.decode(dadosUsuario.token, authSecret)
                if(new Date(token.exp *1000)> new Date()){
                    return res.send(true)
                }
            }
        }catch(e){       
        }
        res.send(false)
    }
    
    return { login , validarToken }
}