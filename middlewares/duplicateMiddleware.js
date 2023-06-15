const {duplicateFound} = require("../utils/duplicateUtils");
const db = require("../models/index");
const User = db.User;

async function duplicateMiddleware(req, res, next){
    const {email, username} = req.body;
    if(await duplicateFound(email,"email",User)){
        return res.status(404).json({error:"Email already exists."})
    }

    if(await duplicateFound(username,"username",User)){
        return res.status(404).json({error:"Username already exists."})
    }

    next();

}

module.exports = {duplicateMiddleware}