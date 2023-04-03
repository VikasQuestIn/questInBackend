module.exports.userlogin=(req,res)=>{
    res.send({msg:"user login controller"});
}
module.exports.userSignup=(req,res)=>{
    res.send({msg:"user signup controller"});
}
module.exports.otpVerify=(req,res)=>{
    res.send({msg:'user otp verification'});
}
module.exports.forgotpassword=(req,res)=>{
    res.send({msg:'user Forgotpassword screen'})
}