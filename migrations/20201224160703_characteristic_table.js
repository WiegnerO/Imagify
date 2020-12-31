exports.up = function(knex) {
    return knex.schema.createTable('characteristics', function(table) {
        table.integer('image_id')
        .unsigned()
        .notNullable();
        table.foreign('image_id')
            .references('id')
            .inTable('images')
            .onDelete('CASCADE');
        table.string('characteristic').notNullable();
        table.string('d');

        table.primary(['image_id', 'characteristic']);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('characteristics');
}; 