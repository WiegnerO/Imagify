exports.up = function(knex) {
    return knex.schema.createTable('images', function(table) {
        table.increments();
        table.string('image_name')
            .notNullable()
            .unique();
        table.string('image_object');
        table.string('image_poster').notNullable();
        table.decimal('price').notNullable()
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('images');
};