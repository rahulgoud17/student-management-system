//app3.js
/*(c) Write a program to print the "Hello World" on console,
"Hello Studentsin" in the browser using Express.js*/

const express = require("express");
const app = express();
app.get("/", (req, res) => {
    console.log("Hello World");
    res.send("Hello Students! Check the terminal console.");
});

app.listen(3000, () => {
    console.log("Server Running");
});

/*
Browser
http://localhost:3000
Terminal Output:
Hello World

Browser Output:
Hello Students! Check the terminal console.*/