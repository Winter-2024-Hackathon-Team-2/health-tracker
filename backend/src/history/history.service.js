const knex = require("../db/connection");

function list() {
  return knex("Track").select("*");
}

function read(trackId) {
  return knex("Track")
    .select("*")
    .where({ track_activity_id: trackId })
    .first();
}
function read2(track_activity_id) {
  return knex("Track as t")
    .join("users as u", "t.user_id", "u.user_id")
    .join("admins as a", "a.user_id", "a.user_id")
    .select("t.*")
    .where({ "t.track_activity_id": track_activity_id });
}

module.exports = {
  list,
  read,
  read2,
};
