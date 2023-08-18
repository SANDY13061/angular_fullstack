// import  express  from "express";
// const app =express();
// var httpPort=3000;
// app.listen(httpPort,()=> console.log('fs project api node listerning on port'+ httpPort+'!'));

import express from "express";
// import * as express from "express";
import cors from "cors";
const api=require("../tsserver/router/api");


const app =express();
app.use(express.json({limit:'1mb'}));
app.use(cors({
    origin:['http://localhost:4200']
}));
app.use("/api",api);

var httpPort=2000;
app.listen(httpPort,()=> console.log('fs project api node listerning on port'+ httpPort+'!'));
