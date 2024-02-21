const knex = require("../db/connection");

function list() {
  console.log("list fires")
  return knex("track").select("*");
}

function read(trackId) {
  console.log("read fires")
  return knex("track")
    .select("*")
    .where({ track_activity_id: trackId })
    .first();
}
function read2(user_id) {
  console.log("read2 fires")
  return knex("track as t")
    .join("users as u", "t.user_id", "u.user_id")
    .select("t.*")
    .where({ "t.user_id": user_id });
}
function read3(userId) {
  console.log("Read3 fires: ", userId)
  return knex("track as t")
    .join("users as u", "t.user_id", "u.user_id")
    .select("t.*")
    .where( 't.user_id', userId )
    .orderBy("t.track_date");
}
function create(track) {
  console.log("create fires")
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
