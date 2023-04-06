const express=require('express');
const app =express();
const PORT=process.env.PORT || 8001
// database connection 
// const connectDB=require('./config/db')
// connectDB();
//  All Routes 
const userRouter=require('./routes/userRouter');
app.use('/api/user',userRouter);
app.get('/',(req,res)=>{
    console.log("Vikas route")
    res.json({msg:'Welcome to BTC QuestionIn made by vikas tiwari'})
})
app.listen(PORT,()=>{
    console.log(`Listing on port ${PORT}`)
})