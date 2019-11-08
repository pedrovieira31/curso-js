const admin = require('./admin')

module.exports = app =>{
    app.post('/cadastrar', app.api.usuario.save)
    app.post('/login', app.api.auth.login)
    app.post('/validarToken', app.api.auth.validarToken)

    app.route('/usuarios')
        .get(app.api.usuario.get)
    app.route('/usuarios/:matricula')
        .put(app.api.usuario.save)
        .get(app.api.processo.get)

    app.route('/processo')
        .post(app.api.processo.save)

    app.route('/processo/:matricula')
        .get(app.api.processo.getMat)

    app.route('/admin')
        .get(app.api.processo.get)
        .delete(app.api.processo.remove)

    app.route('/stats')

        .get(app.api.stat.get)
}