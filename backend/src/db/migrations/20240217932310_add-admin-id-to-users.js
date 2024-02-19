/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.integer("admin_id").notNullable().defaultTo(1);
    table.foreign("admin_id").references("admin_id").inTable("admins");
  });
};

exports.down = function (knex) {
  return knex.schema.alterTable("users", function (table) {
    table.dropForeign("admin_id");
    table.dropColumn("admin_id");
  });
};
