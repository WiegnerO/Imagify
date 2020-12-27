exports.up = function(knex) {
    return knex.schema.createTable('characteristics', function(table) {
        table.integer('image_id')
            .notNullable()
            .references('id')
            .inTable('images')
            .onDelete('CASCADE');
        table.string('characteristic').notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('characteristics');
}; 