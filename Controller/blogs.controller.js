const Blogs = require("../models/blogs.model");
const {findAllBlog,createBlog,findAllBySearch} = require("../services/blogs.service")
const createNewBlog = async(req,res)=>{
    try{ 
        createBlog(req.body)
        res.sendStatus(200);
    }
    catch(err){
        res.status(200).json({error:err.message})
    }
}

 const getAllBlogs = async (req,res)=>{
    try {

        const blogs = await findAllBlog();
        res.json(blogs);
    }
    catch(err)
    {
        res.status(404).json({message: "Could Not Fetch Blogs from DB " } )
    }
 }

 const deleteBlogs = async(req,res)=>{
   try{ const id = req.params.id
    const result  = await Blogs.findOneAndDelete({ _id :id})
    res.json(result);
}
    catch(err)
    {
        res.status(500).json({error : err.messaege})
    }
 }
 const updateBlogWithId =async(req,res)=>{
    try{ 
        const id = req.params.id
        const filter  = {_id: id}
        const update = req.body
        const result = await Blogs.findOneAndUpdate(filter,update,{new:true})
        res.status(200).json(result);
    }
        catch(err)
        {
            res.status(500).json({error : err.messaege})
        }
 }
 const searchBlogs = async (req,res)=>{
    try {
      
        const email = req.query.email;
        const title = req.query.title;
        
        const blogs = await findAllBySearch(email,title); 
        res.json(blogs);
    }
    catch(err)
    {
        res.status(404).json({message: "Could Not Fetch Blogs from DB " } )
    }
 }


module.exports = {createNewBlog,getAllBlogs,deleteBlogs,updateBlogWithId,searchBlogs} 