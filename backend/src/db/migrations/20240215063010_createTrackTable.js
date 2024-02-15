/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("Track", (table) => {
    table.increments("track_activity_id").primary().unique();
    table.foreign("user_id")
    .references("user_id")
    .inTable("users")
    .onDelete("cascade");
    table.integer("user_id").unsigned().notNullable();
    table.integer("track_sleep_quality");
    table.integer("track_sleep_duration");
    table.date("track_date");
    table.integer("track_physical_activity");
    table.integer("track_stress_level");
    table.string("track_focus_area");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable("Track");
};
