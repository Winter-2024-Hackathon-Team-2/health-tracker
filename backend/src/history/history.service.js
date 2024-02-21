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
function read2(user_id) {
  return knex("track as t")
    .join("users as u", "t.user_id", "u.user_id")
    .select("t.*")
    .where({ "t.user_id": user_id });
}
function update(updatedUser) {
  return knex("track")
    .where({ track_activity_id_id: updatedUser.track_activity_id })
    .update(updatedUser, "*")
    .then((res) => res[0]);
}
function create(track) {
  return knex("track")
    .insert(track, "*")
    .then((createdRecords) => createdRecords[0]);
}
module.exports = {
  list,
  read,
  read2,
  update,
  create,
};
