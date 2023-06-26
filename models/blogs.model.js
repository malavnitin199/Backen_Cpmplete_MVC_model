const mongoose = require("mongoose");
const validator = require("validator");
// const blogSchema = new mongoose.Schema({
//     title:String,
//     authour:[String],
//     content : String,
//     publishedAt:Date
// })
const authorSchema = new mongoose.Schema({
    fullName: {type : String ,maxLength:25},
    twitterHandle:{type:String},
    email:{type:String,
        require:true,
        maxLength:50,
        validate:(value)=>{
            return validator.isEmail(value)//either it return trur or false
        }},
    image:{type:String}
},{
    _id:false
})
const blogSchema = new mongoose.Schema({
    title:{type:String , required:true , unique : true},
    authour:{type:[authorSchema]},
    content : {type:String,default:""},
    publishedAt:{type:Date,default:null}
})

const model = mongoose.model("blogs",blogSchema);

module.exports=model;