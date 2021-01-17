
var fs = require("fs");

var notes = fs.readFile("db.json");


module.exports = function(app) {

    app.get("/api/notes", function (req, res) {
        res.notes;
        console.log(notes);
    });

    app.post("/api/notes", function(req, res) {
        notes.push(req.body);

    });
}