const { application, json } = require("express");
const http = require("http");
const { stringify } = require("querystring");
const data = require("./currencyData.json")


const server = http.createServer((req,res)=>{
    console.log("hello from server")
    const date = new Date().toLocaleDateString();
    console.log(date); 
    //if we use header ,the next line will cause error in reciving json data
    // res.write("...hello.....") 
    let dateObj = {
        "Date" : date
    }
    let reqBody = req.url.split("/")
    console.log(req.url , `/currency/${reqBody[2]}`)

    if(req.url==="/status"){
        res.write("<h1> On the currency data portal </h1>")
    }
    else if(req.url==="/currency")
    {
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify(data))
    }
    else if (req.url === `/currency/${reqBody[2]}`)
    {
        const a = data.data.filter((a)=>{ if(a.id == reqBody[2]) return a})
        res.write(JSON.stringify(a));

    }
    else{
        res.writeHead(404)
        res.write("<h1>please Hit the Correct URL for data </h1>")
    }
    
    res.end()
    
})

server.listen(8082,()=>{
    console.log("listen to the port.........")
})