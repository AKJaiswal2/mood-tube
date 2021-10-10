const UserController = require("../controller/userController");
const express=require("express");
let router =express.Router();
router.post('/register',UserController.register);
router.post('/login',UserController.login);
module.exports=router;
