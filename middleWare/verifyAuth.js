const passWord = process.env.passWord;
const verifyPassword = (req,res,next)=>{
    const input = req.headers.authorization;
    if(!input)
    {
       return res.status(403).json({message :" give the password in header"})
    }
    if(!(input == passWord)){
       return res.status(403).json({message :"passWord is incroorct in header "})
    }
    return next();
}

module.exports = {verifyPassword}