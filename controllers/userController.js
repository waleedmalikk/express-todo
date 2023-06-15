const { v4: uuidv4 } = require('uuid');
const bcrypt = require("bcrypt");
const db = require("../models/index");
const jwt = require("jsonwebtoken")
const User = db.User;
const Token = db.Token;
const saltRounds=5;
const secretKey = "todo-backend-key";

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const uuid=uuidv4();
        const currTime =new Date();
        const hashedPass = await bcrypt.hash(password, saltRounds);
        const user = await User.create({ uuid, username, email, password:hashedPass, currTime, currTime });
        createAddToken(email, res);
    } catch (error) {
        console.log("Register error:", error);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const loginUser = async (req,res) => {
    try {
        const {email, password} = req.body;
        const emailExists = await User.findOne({where: {email: email},  attributes: ['email', 'password']});
        if(emailExists!==null){
            const savedPass = emailExists.dataValues.password;
            const passMatch = await bcrypt.compare(password, savedPass);
            if(passMatch){
                createAddToken(email, res);
            }else{
                res.status(404).json({error:"Provided Password is incorrect."})
            }
        }else{
            res.status(404).json({error:"Provided Email does not exist."})
        }

    }catch(error){
        console.log("Login error:", error);
        res.status(500).json({error:"Failed to login"})
    }
}

const logoutUser = async (req,res) =>{
    try {
        const tokenBearer = req.headers["authorization"];
        const token = tokenBearer.split(" ")[1];
        const tokenExists = await Token.findOne({where: {token:token}, attributes: ['id']});
        if(tokenExists!==null){
            Token.destroy({
                where:{
                    id: tokenExists.dataValues.id
                }
            }).then(()=>{
                res.status(200).json({msg:"Token revokation successful."})
            }).catch(()=>{
                res.status(500).json({msg:"Failed to revoke token."})
            })
        }else{
            res.status(404).json({msg:"Provided Token does not exist."})
        }

    } catch (error) {
        console.log("Log out Error:", error);
        res.status(500).json({error:"Failed to logout"})
        
    }
}

const deleteUser = async (req, res) => {
    try {
      const tokenBearer = req.headers["authorization"];
      if (!tokenBearer) {
        return res.status(400).json({ error: "No token sent" });
      }
  
      const token = tokenBearer.split(" ")[1];
      const tokenObj = await Token.findOne({ where: { token }, attributes: ['id'] });
  
      if (!tokenObj) {
        return res.status(404).json({ error: "Token does not exist" });
      }
  
      const { email, password } = req.body;
      const userObj = await User.findOne({ where: { email }, attributes: ['email', 'password'] });
  
      if (!userObj) {
        return res.status(404).json({ error: "User does not exist" });
      }
  
      const savedPass = userObj.dataValues.password;
      const passMatch = await bcrypt.compare(password, savedPass);
  
      if (!passMatch) {
        return res.status(404).json({ error: "Provided password is incorrect" });
      }
  
      await User.destroy({ where: { email } });
      await Token.destroy({ where: { id: tokenObj.dataValues.id } });
  
      res.status(200).json({ msg: "User and token deleted successfully" });
    } catch (err) {
      console.error("err:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
  

function createAddToken(email,res){
    const token = jwt.sign({ email: email }, secretKey, { expiresIn: '1h' });
    const uuidToken=uuidv4();
    Token.create({uuidToken, token})
    .then(()=>{
        res.status(200).json({ token: `Bearer ${token}` });
    }).catch(()=>{
        res.status(500).json({error:"Failed to add Token."})
    })
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  deleteUser
};