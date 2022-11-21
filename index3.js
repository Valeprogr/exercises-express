const express = require("express");
const app = express();
var path = require('path');
const PORT = 3000;

app.delete("/",(req,res)=>{
res.json({ good : 'yeep'});
});

app.listen(PORT,()=>{console.log(`Server started on ${PORT},`)})