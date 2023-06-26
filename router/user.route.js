const route = require("express").Router();
const  controler = require("../Controller/user.controller")
const {validQuerySearch} = require("../middleWare/validQuerySearch")


route.get("/",controler.user)
route.get("/search",validQuerySearch,controler.fiterUser)
route.get("/:uuid",controler.filterByGender)

module.exports = route 