import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

import path from 'path';

const __dirname = path.resolve();

import mongoose from 'mongoose';
import Data from './models/Data.js'

const app = express();
app.use(express.json());


const connectMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URI);
  if(connection){
    console.log('connected to mongoDB')
  }
}
connectMongoDB();











app.post('/data', async (req,res)=>{
    
const image = req.body.image;
const design = req.body.design;

const data = new Data ({
    image: image,
    design: design
});
try{
    const savedData = await data.save();

    res.json({
        success: true,
        data: savedData,
        message: 'data added successfully'
    })
}
catch(e){
    res.json({
        success:false,
        message:e.message
    })
}
})











app.get('/datas', async (req, res)=>{

    

    const datas = await Data.find();
try{
    res.json({
        success: true,
        data: datas,
        message: 'product retrives successfully'
    })
}
catch(e){
    res.json({
        success:false,
        message:e.message
    })
}  
 
})











app.get('/data/:id', async (req, res)=>{
const {id}= req.params;
    const datas = await Data.findOne({_id: id});
try{
    res.json({
        success: true,
        data: datas,
        message: 'product retrives successfully'
    })
}
catch(e){
    res.json({
        success:false,
        message:e.message
    })
}  

})













app.delete('/data/:id', async (req, res)=>{
    const {id}= req.params;
        const datas = await Data.deleteOne({_id: id});
    try{
        res.json({
            success: true,
            data: datas,
            message: 'product deleted successfully'
        })
    }
    catch(e){
        res.json({
            success:false,
            message:e.message
        })
    }  
    
    })
     







    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
      
        app.get('*', (req, res) => {
          res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
        });
      }









const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server rumming on port ${PORT}`)
})