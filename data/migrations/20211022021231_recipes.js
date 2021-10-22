exports.up = function (knex) {
	return knex.schema
		.createTable("recipes", (tbl) => {
			tbl.increments("recipe_id");
			tbl.string("recipe_name").notNullable();
			tbl.dateTime("created_at").notNullable().unique();
		})
		.createTable("ingredients", (tbl) => {
			tbl.increments("ingredient_id");
			tbl.string("ingredient_name").notNullable();
			tbl.integer("quantity").notNullable();
		})
		.createTable("steps", (tbl) => {
			tbl.increments("step_id");
			tbl.integer("step_number").notNullable();
			tbl.string("step_instructions").notNullable();
			tbl.string("ingredients_steps_id");
		})
		.createTable("ingredients_steps", (tbl) => {
			tbl.increments("ingredient_step_id");
			tbl.integer("ingredient_id").notNullable();
			tbl.integer("step_id").notNullable();
		});
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists("ingredients_steps")
		.dropTableIfExists("steps")
		.dropTableIfExists("ingredients")
		.dropTableIfExists("recipes");
};
