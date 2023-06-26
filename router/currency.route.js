const route = require("express").Router();
const controller = require("../Controller/currency");

route.get("/",controller.currency)
route.get("/:type",controller.type)

module.exports = route
