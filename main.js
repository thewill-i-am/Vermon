//imports

const express = require("express");
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
const app = express();
app.use(cors(corsOptions));
const db = require('./database/db');

(async () => {
    await db.sequelize.sync()
})();

db.models.Usuario

// var bodyParser = require("body-parser");
// const path = require('path');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: "100mb" }));

// const port = 3001;

// //static files
// app.use(express.static("layers"));
// app.use("/layers", express.static(__dirname + "layers/background"));
// app.use("/layers", express.static(__dirname + "layers/Bottom Lid"));
// app.use("/layers", express.static(__dirname + "layers/Eye color"));
// app.use("/layers", express.static(__dirname + "layers/Eyeball"));
// app.use("/layers", express.static(__dirname + "layers/Goo"));
// app.use("/layers", express.static(__dirname + "layers/Iris"));
// app.use("/layers", express.static(__dirname + "layers/Shine"));
// app.use("/layers", express.static(__dirname + "layers/Top lid"));

// app.use("/api", require("./routes/ruta"));

// app.listen(port, () => console.info(`Listening on port ${port}`));

