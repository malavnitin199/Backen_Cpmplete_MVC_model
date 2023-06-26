const Blogs = require("../models/blogs.model")

const findAllBlog = ()=>{
    return  Blogs.find({});
}
const createBlog = async(data)=>{
     const document = new Blogs(data);
    console.log(document, "from blogs controller");
    await document.save()
}
const findAllBySearch = (email,title)=>{
    console.log("check")
   return Blogs.find({
        
        //$or is used for or condition either it was and consition
       $or:[{title:title},
        {authour:{$elemMatch:{email:email}}}]
    });
}
module.exports = {findAllBlog,findAllBySearch,createBlog}