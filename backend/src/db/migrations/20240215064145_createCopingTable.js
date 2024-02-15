/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("strategies", (table) => {
    table.increments("strategy_id").primary();
    table.string("strategy_coping_type");
    table.string("strategy_description");
    table.string("strategy_video").nullable();
    table.string("strategy_photo").nullable();
    table.string("strategy_article").nullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("strategies");
};
