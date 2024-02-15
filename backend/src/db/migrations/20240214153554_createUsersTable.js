/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("user_id").primary();
    table.uuid("user_password").defaultTo(knex.raw("uuid_generate_v4()"));
    table.string("user-gender");
    table.integer("user_age");
    table.string("occupation");
    table.float("user_sleep_duration", 2);
    table.float("user_sleep_quality", 2);
    table.string("user_physical_activity");
    table.integer("user_stress");
    table.string("user_bmi");
    table.string("user_blood_pressure");
    table.string("user_heart_rate");
    table.string("user_daily_steps");
    table.string("user_sleep_disorder");
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
