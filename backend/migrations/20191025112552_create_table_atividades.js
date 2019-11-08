
exports.up = function(knex, Promise) {
    return knex.schema.createTable('atividades', table =>{
        table.string('codigo').primary()
        table.integer('horasTotais').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('atividades')
};