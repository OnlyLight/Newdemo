//gọi tới module express
var express = require('express');
var fs = require('fs');
var path = require("path");

//khoi tao doi tuong
var app = express();
app.use(express.static("public")); // vào đây để tìm file

var nd = fs.readFileSync(__dirname + '\\public\\db.json', {encoding: 'utf-8'});
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname+'/trangchu.html'));
});

app.get("/todos", function(req, res) {
	res.end(nd);
});

//lang nghe cong 30000
app.listen(3000, function() {
	console.log("Connected");
});