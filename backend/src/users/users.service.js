const knex = require("../db/connection");

function list() {
  return knex("users").select("*");
}

function destroy(user_id) {
  return knex("users").where({ user_id }).del();
}
function read(user_id) {
  return knex("users").select("*").where({ user_id }).first();
}
function update(updatedUser) {
  return knex("users")
    .where({ user_id: updatedUser.user_id })
    .update(updatedUser, "*")
    .then((res) => res[0]);
}
function create(user) {
  return knex("users")
    .insert(user, "*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  list,
  destroy,
  read,
  update,
  create,
};
