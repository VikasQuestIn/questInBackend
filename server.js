// console.log("Node  js ")
const express=require('express');
const router=require('express').Router();
const app =express();
const PORT=process.env.PORT || 3000

// database connection 

const connectDB=require('./config/db')
connectDB();


//  All Routes 
const userRouter=require('./routes/userRouter');
const adminRouter=require('./routes/adminRouter');
const flowController=require('./routes/flowRouter');

app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);
app.use('/api/flows',flowController)

app.get('/',(req,res)=>{
    res.json({msg:'Welcome to BTC QuestionIn'})
})

app.listen(PORT,()=>{
    console.log(`Listing on port ${PORT}`)
})