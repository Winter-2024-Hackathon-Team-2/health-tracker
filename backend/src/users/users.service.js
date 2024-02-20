const knex = require("../db/connection");

function list() {
  return knex("users as u")
    .leftJoin("admins as a", "u.user_id", "a.user_id")
    .select("u.*", "a.is_admin")
    .then(rows => {
      return rows.map(row => ({
        ...row,
        is_admin: row.is_admin !== null
      }));
    });
}

function destroy(user_id) {
  return knex("users").where({ user_id }).del();
}
function read(user_id) {
  return knex("users as u")
    .leftJoin("admins as a", "u.user_id", "a.user_id")
    .select("a.*", "u.*")
    .where({ "u.user_id": user_id })
    .then(rows => {
      return rows.map(row => ({
        ...row,
        is_admin: row.is_admin !== null
      }));

    })
    .then((user) => user[0])
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

async function login(username, password) {
  const user = await knex("users as u")
    .leftJoin("admins as a", "u.user_id", "a.user_id")
    .select("u.*", "a.is_admin")
    .where({ 'u.user_id': username, 'u.user_password': password })
    .first();

  if (user) {
    user.is_admin = user.is_admin !== null;
    return user;
  } else {
    return null;
  }
}


module.exports = {
  list,
  destroy,
  read,
  update,
  create,
  login,
};
