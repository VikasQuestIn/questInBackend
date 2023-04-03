const router = require("express").Router();
const {
    userlogin,
    userSignup,
    forgotpassword,
    otpVerify
} =require('../controllers/userControllers');
module.exports=router;