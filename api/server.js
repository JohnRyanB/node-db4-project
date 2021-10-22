const express = require("express");
const server = express();
//const RecipeRouter = require("./recipes/recipes-router")
server.use(express.json());
//server.use("/api/recipes", RecipeRouter)

server.get("/", (req, res) => {
	res.status(200).json({ api: "is working" });
});

module.exports = server;
