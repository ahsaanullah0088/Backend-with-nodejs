import express from "express";
import path from "path";

const app = express()

const users =[];

app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine" , "ejs");
// setting up ejs engine

app.get('/success' , (req , res) => {

    res.render("success");
});

app.post("/contact" , (req , res) => {
    console.log(req.body);
users.push({username : req.body.username , email : req.body.email ,phone : req.body.phone , address : req.body.address});
    res.redirect("/success");
});

app.get("/users" , (req , res) => {
    res.json({
        users
    });
});
app.listen(5000 , () => {
    console.log('Server is running on port 5000');
});