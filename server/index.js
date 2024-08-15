import express from 'express';
import dotenv from 'dotenv'
dotenv.config();


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

const savedData = await data.save();

    res.json({
        success: true,
        data: savedData,
        message: 'data added successfully'
    })
})


app.get('/datas', async (req, res)=>{

    const datas = await Data.find();

    res.json({
        success: true,
        data: datas,
        message: 'product retrives successfully'
    })

})
app.get('/data/:id', async (req, res)=>{
const {id}= req.params;
    const datas = await Data.findOne({_id: id});

    res.json({
        success: true,
        data: datas,
        message: 'product retrives successfully'
    })

})
app.delete('/data/:id', async (req, res)=>{
    const {id}= req.params;
        const datas = await Data.deleteOne({_id: id});
    
        res.json({
            success: true,
            data: datas,
            message: 'product deleted successfully'
        })
    
    })
     

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`server rumming on port ${PORT}`)
})