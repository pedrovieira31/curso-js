const schedule = require('node-schedule')

module.exports = app =>{
    schedule.scheduleJob('*/1****', async function(){
        const usuariosCount = await app.db('usuarios').count('matricula').first()
        const atividadesCount = await app.db('atividades').count('codigo').first()
        const processosCount = await app.db('processos').count('id').first()

        const {Stat } = app.api.stat
        const lastStat = await Stat.findOne({},{},{sort:{'createdAt' : -1}})

        const stat = new Stat({
            usuarios: usuariosCount.count,
            atividades: atividadesCount.count,
            processos: processosCount.count,
            createdAt: new Date()
        })
        const mudarUsuarios = !lastStat || stat.usuarios !== lastStat.usuarios
        const mudarAtividades = !lastStat || stat.atividades !== lastStat.atividades
        const mudarProcessos = !lastStat || stat.processos !== lastStat.processos

        if(mudarUsuarios||mudarAtividades ||mudarProcessos){
            stat.save().then(()=> console.log('[Stats] Dados atualizados!'))
        }
    })
}