const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const { createServer } = require("node:http");

const PORT = process.env.PORT || 8080;
const app = express();
const httpServer = createServer(app);

dotenv.config();

//mongoose connection establishment
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser:true, useUnifiedTOpology:true}). 
then(()=>{
    console.log("Connected to database");
}).catch((e)=>{
    console.log("An error occurred while connecting to database \n", e);
})

//middleware
app.use(express.json());