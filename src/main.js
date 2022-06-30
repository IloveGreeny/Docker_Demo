import express from "express";

const app = express();

app.get("/",(req,res)=> {
    res.send("fat");
})

const port = process.env.PORT || 3030;


app.listen(port);