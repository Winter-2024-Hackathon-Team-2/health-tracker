/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("admins", (table) => {
    table.foreign("user_id")
    .references("user_id")
    .inTable("users")
    .onDelete("cascade")
    table.integer("user_id").unsigned().notNullable().primary();
    table.boolean("is_admin").defaultTo(knex.raw('FALSE'));
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("admins");
};
