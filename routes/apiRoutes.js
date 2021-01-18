
var fs = require("fs");



module.exports = function(app) {

    //========read db.json file and return all notes as json ===========================
    app.get("/api/notes", function (req, res) {
        fs.readFile("db/db.json", function(err, data) {
           if (err) throw err;
           console.log(JSON.parse(data));
           res.json(JSON.parse(data));
        });
        
    });

    //=========receive new note to save on request body, add it to db.json, return new note to client=======
    app.post("/api/notes", function(req, res) {
        console.log(req.body);
        fs.readFile("db/db.json", function(err, data) {
            if (err) throw err;
            let notes = JSON.parse(data);
            console.log(notes);
            notes.push(req.body);
            console.log(notes);
            res.json(req.body);
         });
    });

    //======= delete note given ID ======================

}