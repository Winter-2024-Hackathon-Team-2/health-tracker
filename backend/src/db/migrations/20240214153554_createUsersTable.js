/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTableIfNotExists("users", (table) => {
    table.integer("user_id").primary();
    table.string("user-gender");
    table.integer("user_age");
    table.string("occupation");
    table.float("user_sleep_duration", 2);
    table.float("user_sleep_quality", 2);
    table.string("user_physical_activity");
    table.integer("user_stress");
    table.string("user_bmi");
    table.string("user_blood_pressure");
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
