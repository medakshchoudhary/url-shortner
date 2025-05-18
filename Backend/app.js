import express from 'express';
const app = express();
import {nanoid} from 'nanoid';
import dotenv from 'dotenv';
import connectDB from './src/config/mongo.config.js';
import shortUrlModel from './src/models/shortUrl.model.js';

dotenv.config('./.env');

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.post("/api/create", (req,res)=>{
    const {url} = req.body;
    const shortUrl = nanoid(7);
    const newUrl = new shortUrlModel({
        full_url: url, // comming from the frontend body
        short_url: shortUrl, // we just made
    })
    newUrl.save()
    console.log(url);
    res.send(shortUrl);
})

app.get("/:id", async (req,res)=>{ 
    const {id} = req.params;
    const url = await shortUrlModel.findOne({
        short_url: id
    })
    if(url){
        return res.redirect(url.full_url);
    }
    return res.status(404).send("Invalid id");
})

app.listen(3000, ()=>{
    connectDB();
    console.log("Server is running with url http://localhost:3000");
})