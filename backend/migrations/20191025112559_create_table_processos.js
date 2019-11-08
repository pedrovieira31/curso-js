
exports.up = function(knex, Promise) {
    return knex.schema.createTable('processos', table =>{
        table.increments('id').primary()
        table.string('atividade').references('codigo') .inTable('atividades').notNull()
        table.string('matricula').references('matricula') .inTable('usuarios').notNull()
        table.string('descricao',50).notNull()
        table.integer('horas')
        table.binary('certificado').notNull()
        table.boolean('validacao').notNull().defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('processos')
};
