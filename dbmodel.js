const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'recipease',
  password: 'testdbpass',
  port: 5432,
});

const getListRecipes = async (listname) => {
  const results = await pool.query(`SELECT * FROM lists WHERE listname='${listname}'`);
  return results;
}

const addToList = async (listname, recipe, ingredients, url) => {
  const results = await pool.query(`INSERT INTO lists (listname, recipename, recipe, url) VALUES ('${listname}', '${recipe}', '${ingredients}', '${url}')`);
  return results;
}

const removeFromList = async (id) => {
  const results = await pool.query(`DELETE FROM lists WHERE id=${id}`);
  return results;
}

module.exports = {
  getListRecipes,
  addToList,
  removeFromList
}