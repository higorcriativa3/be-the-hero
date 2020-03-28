
//Método de criação
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();

  })
};
//Método para caso dê algum problema
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
//npx knex migrate:latest para rodar a migrate

//npx knex migrate:rollback executa o down, desfaz a ultima latest