
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table){
    table.increments();

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    
    table.string('ong_id').notNullable();

    //Chave instrangeira, id da tabela ongs
    table.foreign('ong_id').references('id').inTable('ongs');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};

//npx knex migrate:rollback executa o down, desfaz a ultima latest
