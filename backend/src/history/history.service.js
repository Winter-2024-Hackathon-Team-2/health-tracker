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
function read3(userId) {
  return knex("track as t")
    .join("users as u", "t.user_id", "u.user_id")
    .select("t.*")
    .where({ "t.user_id": userId });
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
  read3,
  create,
};
