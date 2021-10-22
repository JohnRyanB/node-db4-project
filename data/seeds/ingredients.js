exports.seed = function (knex, Promise) {
	return knex("recipes").insert([
		{ ingredient_name: "olive oil", quantity: 0.014 },
		{ ingredient_name: "garlic", quantity: 0.02 },
	]);
};
