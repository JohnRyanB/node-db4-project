const router = require("express").Router();
const Recipes = require("./recipes-model");
const mw = require("./recipes-middleware");

router.get("/:id", (req, res) => {
	const id = req.params.id;
	Recipes.getRecipesById(id)
		.then((recipe) => {
			res.status(200).json(recipe);
		})
		.catch((err) => {
			res.status(500).json({ message: err.message });
		});
});
