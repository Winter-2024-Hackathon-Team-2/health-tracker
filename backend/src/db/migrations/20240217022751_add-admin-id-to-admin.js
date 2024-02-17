/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.alterTable('admins', function(table) {
      table.increments('admin_id').primary();
      table.dropPrimary('user_id');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.alterTable('admins', function(table) {
      table.dropColumn('admin_id');
      table.primary('user_id');
    });
  };
