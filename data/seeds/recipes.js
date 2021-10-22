exports.seed = function (knex, Promise) {
	return knex("recipes").insert([
		{ recipe_name: "Spaghetti Bolognese", created_at: Date.now() },
	]);
};
