const route = require("express").Router();
const  blogscontroler = require("../Controller/blogs.controller")


route.get("/",blogscontroler.getAllBlogs)
route.get("/find",blogscontroler.searchBlogs)
route.patch("/:id",blogscontroler.updateBlogWithId)
route.get("/:id",blogscontroler.deleteBlogs)
route.post("/new",blogscontroler.createNewBlog)
module.exports = route 