const express = require("express");
const app = express();

app.get("/", (req,res)=>{res.send("<h1>Hello tester</h1><p>v 1.0.0</p>")})

app.listen(3000,()=>console.log("server listening on port 3000"))