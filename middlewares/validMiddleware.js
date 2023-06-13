
const {isEmailValid, isUserPassValid} = require("../utils/validationUtils")

const validMiddleware = (req, res, next)=> {
    const { email, username, password } = req.body;

    if(!isEmailValid(email)){
        return res.status(404).json({error:"Invalid email"});
    }

    if(!isUserPassValid(username)){
        return res.status(404).json({error:"Invalid username"});
    }

    if(!isUserPassValid(password)){
        return res.status(404).json({error:"Invalid password"});
    }

    next();
}

module.exports={validMiddleware}