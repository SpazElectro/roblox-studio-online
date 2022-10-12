let express = require("express");
let app = express();

app.use(express.static(__dirname + "/../site/"))

app.listen(3000, function() {
    console.log("Listening on port 3000, localhost:3000")
})