var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.send("Hello");
});




app.listen(3000, function(){
    console.log("Mondiali App starting");
})