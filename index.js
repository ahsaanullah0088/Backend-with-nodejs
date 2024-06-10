import express from "express";

const app = express()

app.get('/' , (req , res) => {
    const pathlocation = path.resolve("./index.html");

    res.render();
});

app.listen(5000 , () => {
    console.log('Server is running on port 5000');
});