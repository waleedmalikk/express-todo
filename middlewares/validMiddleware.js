
const {isEmailValid, isUserPassValid} = require("../utils/validationUtils")

function validRegisterMiddleware(req, res, next) {
    try {
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
        
    } catch (error) {
        console.log("error:", error);
        return res.status(404).json({error:"Invalid input"});
    }
}

function validLoginMiddleware(req, res, next) {
    try {
        const { email, password } = req.body;
        if(!isEmailValid(email)){
            return res.status(404).json({error:"Invalid email"});
        }
        if(!isUserPassValid(password)){
            return res.status(404).json({error:"Invalid password"});
        }
        next();    
    } catch (error) {
        console.log("error:", error);
        return res.status(404).json({error:"Invalid input"});
    }
}

module.exports={validRegisterMiddleware, validLoginMiddleware}