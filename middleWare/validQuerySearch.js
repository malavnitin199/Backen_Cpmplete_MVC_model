const Joi = require("joi");

const schema = Joi.object()
.keys({
    age : Joi.number().integer().min(0).max(100),
    gender : Joi.string().valid("male","female")
})
.or("age","gender");


const validQuerySearch= (req,res,next)=>{
    const result = schema.validate(req.query)
    if( result.error){
    // ask from anandu return res.status(500).json({result.error}) why it was not working
        return res.status(500).json({resulT :result.error})
    }
    return next();
    
}

    
module.exports = {validQuerySearch};