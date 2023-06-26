require('dotenv').config()

const userData = require("../userData.json")

const user = (req,res)=>{
    console.log("llll1")
    res.send(userData)
}
// const passWord = process.env.passWord;
// this function will converted into middleWare
// const verifyPassword = (header)=>{
//     return (header.authorization == passWord)
// }


const fiterUser = (req,res)=>{
    const {age,gender} = req.query;


    // this is not needed if we use middleWare
    // if(!verifyPassword(req.headers)){
       
    //     return res.sendStatus(403);
    // }



    // this things should be done with joi 
    // if(!age && !gender)
    // {
    //    return  res.status(401).send("please give age or gender")
    // }
    // if(age){
    //     if(!Number(age)){
    //       return  res.status(402).send("Message : age should be a number")
    //     }
    //     if(Number(age)<0 || Number(age)>100)
    //     {
    //        return res.status(402).send("Mesaage : age is in range of [0 to 100]")
    //     }
    // }
    
    console.log(age,gender,"llll2")
    if(age && gender){
        const a = userData.data.filter((a)=>{ if(Number(a.dob.age) ==Number(age) && a.gender == gender ) return a})
        res.send(a)
    }
    else if(age){
        const a = userData.data.filter((a)=>{ if(Number(a.dob.age) ==Number(age) ) return a})
        res.send(a)
    }
    else if(gender){
        const a = userData.data.filter((a)=>{ if(a.gender == gender ) return a})
        res.send(a)
    }
    else{
        res.status(404).json("please give age or gender")
    }
}
const filterByGender = (req,res)=>{
    console.log("llll3")
    const a = userData.data.filter((a)=>{ if(a.gender == req.params.uuid) return a})
    res.send(a)
}



module.exports = {user,fiterUser,filterByGender}
