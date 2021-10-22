exports.seed = function (knex, Promise) {
	return knex("ingredients_steps").insert([
		{ recipe_id: 1, ingredient_id: 1, step_id: 2 },
		{ recipe_id: 1, ingredient_id: 2, step_id: 3 },
		{ recipe_id: 1, ingredient_id: 3, step_id: 3 },
	]);
};
