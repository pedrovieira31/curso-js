
exports.up = function(knex, Promise) {
    return knex.schema.createTable('usuarios', table =>{
        table.string('matricula').primary()
        table.string('nome').notNull()
        table.string('senha').notNull()
        table.string('email').notNull().unique()
        table.boolean('admin').notNull().defaultTo(false)
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('usuarios')
};
