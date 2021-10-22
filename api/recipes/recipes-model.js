const db = require("../data/db-config.js");

function getRecipesById(id) {
	return db("fruits").where({ id }).first();
}

module.exports = { getRecipesById };
