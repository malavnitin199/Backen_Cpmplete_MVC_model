const data = require("../currencyData.json")
const currency = (req,res)=>{
    const type = req.query.type;
    console.log(type,"hj hj")
    const a = data.data.filter((a)=>{ if(a.min_size> type) return a})
    if(a.length > 0){
        res.json(a)
    }else{
        res.send("<h1>No such data is present</h1>")
    }
    
    // res.json(currency)
}
const type = (req,res)=>{
    const type = req.params.type;
    const a = data.data.filter((a)=>{ if(a.id == type) return a})
    res.json(a)
    // res.json(currency)
}
const starter = (req,res) =>{
    res.write("<h1> Hello From Express....</h1>")
    res.end();
}

module.exports = {starter,currency,type};