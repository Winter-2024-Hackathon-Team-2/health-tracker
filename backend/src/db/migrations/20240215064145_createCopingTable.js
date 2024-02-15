/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("strategies", (table) => {
    table.increments("strategy_id").primary();
    table.string("strategy_coping_type");
    table.string("strategy_description");
    table.string("strategy_link_one").nullable();
    table.string("strategy_link_two").nullable();
    table.string("strategy_link_three").nullable();
    table.string("strategy_link_four").nullable();
    table.string("strategy_link_five").nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("strategies");
};
