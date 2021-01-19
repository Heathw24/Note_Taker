
var fs = require("fs");



module.exports = function(app) {

    //========read db.json file and return all notes as json ===========================
    app.get("/api/notes", function (req, res) {
        fs.readFile("db/db.json", function(err, data) {
           if (err) throw err;
        //    console.log(JSON.parse(data));
           res.json(JSON.parse(data));
        });
        
    });

    //=========receive new note to save on request body, add it to db.json, return new note to client=======
    app.post("/api/notes", function(req, res) {
        console.log(req.body);
        var notes = JSON.parse(fs.readFileSync("db/db.json"));
       
        var newNote = req.body;
        newNote.id = notes.length;
        console.log(notes)
        notes.push(newNote);
        console.log(notes);

        fs.writeFile("db/db.json",JSON.stringify(notes), function(err) {
            if (err) throw err;
            console.log("Saved");
        })

        res.json(req.body);
    });

    //======= delete note given ID ======================

    app.delete("/api/notes/:id", function(req, res) {
        var notes = JSON.parse(fs.readFileSync("db/db.json"));
       
        
        console.log(notes[req.params.id]);
        console.log(req.params.id);

        notes.splice(req.params.id, 1);
     
        // fix id
        for (i=0; i < notes.length; i++){
         if(!notes[i].id == i){
             notes[i].id = i;
         };

        };
        //rewrite db
         fs.writeFile("db/db.json",JSON.stringify(notes), function(err) {
            if (err) throw err;
            console.log("Saved");
        })
        
    });
}