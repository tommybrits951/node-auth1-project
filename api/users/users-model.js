const db = require('../../data/db-config');


/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
async function find() {
  return await db('users').select("user_id", "username", "password");
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
async function findBy(filter) {
  const users = await db('users').where(filter).select("username", "password");
  return users;
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
async function findById(user_id) {
const user = await db('users').where("user_id", user_id).first();
return user
}

/**
  resolves to the newly inserted user { user_id, username }
 */
async function add(user) {
  const [id] = await db('users').insert(user);
  const newUser = await findById(id);
  return newUser;
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  find,
  findBy,
  findById,
  add
}