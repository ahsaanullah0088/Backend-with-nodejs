import express from "express";
import path from "path";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://ahsaanu70:ahsaanu70@backend.zlc1iox.mongodb.net/?retryWrites=true&w=majority&appName=backend", {
    dbName: "backend",
}).then(()=>
    console.log("Connected to the database")).catch((err) => console.log(err));

const messageSchema = new mongoose.Schema({
    username: String,
    email: String,
    phone: Number,
    address: String,
});

const Message = mongoose.model("Message", messageSchema);
const app = express()


app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({ extended: true }));

app.set("view engine" , "ejs");
// setting up ejs engine

app.get("/" , (req , res) => {
    res.render("index");
});

app.get('/success' , (req , res) => {

    res.render("success");
}); 

app.post("/contact" , async (req , res) => {
//  const messageData ={username : , email:  ,phone:  , address: };cps
const {username , email , phone , address} = req.body;
 await Message.create({username , email  ,phone  , address });
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