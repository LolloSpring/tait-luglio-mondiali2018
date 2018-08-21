var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");


data = {
	id: "0",
	name: "Croazia",
	is_still_in: true,
	matches: [
		{	
		opponent: "France",
		outcome: "L"
		}
	]
}

app.get("/teams", function(req, res) {
    res.send(data);
});

app.get("/teams/new", function(req, res) {
    res.render("./teams/new")
});


app.post("/teams", function(req, res) {
    res.send("post teams");
});

app.listen(3000, function () {
  console.log('Mondiali listening on port 3000!');
});



