const router=require('express').Router();

const multer=require('multer')
const path=require('path');

let storage =multer.diskStorage({
    destination:(req,file,cb)=> cb(null,'uploads/'),
    filename: (req,file,cb)=>{
        const uniqueName=`${Date.now()}-${Math.round(Math.round()*1E9)}${path.extname(file.originalname)}`;

        cb(null,uniqueName)

    }
})

let upload=multer({
    storage,
    limits:{fileSize:1000000 *100},

}).single('myfile')
router.post('/',(req,res)=>{

    // validate request 
    if(req.files){
        return res.json({erro:'All filds are required'});
    }

    // store files 
        upload(req,res,(err)=>{
            if(err){
                return res.status(500).send({error:err.message})
            }
  // store into database 

        
        })
  

    // Response - link 

})
router.get('/files',(req,res,next)=>{
    res.send({filesOutput:"files send"})
})
module.exports =router;