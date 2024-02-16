const knex = require("../db/connection");

function list() {
  return knex("track").select("*");
}

function read(trackId) {
  return knex("track")
    .select("*")
    .where({ track_activity_id: trackId })
    .first();
}
function read2(track_activity_id) {
  return knex("track as t")
    .join("users as u", "t.user_id", "u.user_id")
    .select("t.*")
    .where({ "t.track_activity_id": track_activity_id });
}

module.exports = {
  list,
  read,
  read2,
};
