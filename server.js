var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ======================================================================================
// Routes are defined here

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


//=======================================================================================


app.listen(PORT, function() {
  console.log("App is listening on PORT: " + PORT);
});