exports.up = function(knex) {
    return knex.schema.createTable('images', function(table) {
        table.increments();
        table.string('image_name')
            .notNullable()
            .unique()
            .index();
        table.blob('image_object');
        table.string('foo');
        table.string('image_poster').notNullable();
        table.decimal('price').notNullable()
      });
      
};

exports.down = function(knex) {
    return knex.schema.dropTable('images');
};