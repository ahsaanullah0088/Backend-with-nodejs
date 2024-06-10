import express from "express";
import path from "path";

const app = express()

app.use(express.static(path.join(path.resolve(), "public")));

app.set("view engine" , "ejs");
// setting up ejs engine

app.get('/' , (req , res) => {

    // res.render("index");
    res.sendFile("index.html");
});

app.listen(5000 , () => {
    console.log('Server is running on port 5000');
});