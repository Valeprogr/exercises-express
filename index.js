const express = require("express");
const app = express();
var path = require('path');
const PORT = 3000;

app.get("/",(req,res)=>{
res.send("<h1>Hello world!</h1>")
});

app.listen(PORT,()=>{console.log(`Server started on ${PORT},`)})