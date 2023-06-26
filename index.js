require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const DB_URI ="mongodb://127.0.0.1:27017";
mongoose
    .connect(DB_URI)
    .then(()=>{
        console.log("connected to DB at ",DB_URI);
    })
    .catch((err)=>{
        console.log(err);
    });
const {starter} = require("./Controller/currency");
const currencyRouter = require('./router/currency.route')
const userRouter =require("./router/user.route")
const {verifyPassword} = require("./middleWare/verifyAuth")
const blogRoute = require("./router/blogRouter")
const app = express(); 
const PORT = 8082;

// app.use(verifyPassword)
// this is used to aceess the body from req.
app.use(express.json())

app.get("/",starter)
app.use("/currency",currencyRouter)
app.use("/user",userRouter)
app.use("/blogs",blogRoute)
 

app.listen(PORT,()=>{
    console.log("listening to the port 8082...")
})

