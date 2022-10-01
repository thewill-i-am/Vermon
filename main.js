//imports

const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "100mb" }));

const port = 3001;

//static files
app.use(express.static("layers"));
app.use("/layers", express.static(__dirname + "layers/background"));
app.use("/layers", express.static(__dirname + "layers/Bottom Lid"));
app.use("/layers", express.static(__dirname + "layers/Eye color"));
app.use("/layers", express.static(__dirname + "layers/Eyeball"));
app.use("/layers", express.static(__dirname + "layers/Iris"));
app.use("/layers", express.static(__dirname + "layers/Shine"));
app.use("/layers", express.static(__dirname + "layers/Top lid"));

app.use(express.static(__dirname + '/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.use("/api", require("./routes/ruta")); 



app.listen(port, () => console.info(`Listening on port ${port}`));
