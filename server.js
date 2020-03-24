const express = require("express");
const morgan = require("morgan");
// const mongojs = require("mongojs");
// const logger = require("morgan");
const mongoose = require("mongoose");
// require("./routes/api-routes.js");
// require("./routes/html-routes.js");

//const db = require("./models");
//console.log(db);
const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan("dev"));
// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true, useFindAndModify: false
})

// require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// const databaseUrl = "WorkoutTracker";
// const collections = ["workout"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//     console.log("Database Error:", error);
// });

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkoutTracker", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// app.get("/", (req, res) => {
//     res.send(index.html);
// });

// app.get("/exercise", (req, res) => {
//     res.send(exercise.html);
// });

// app.get("/stats", (req, res) => {
//     res.send(stats.html);
// });

// app.get("/index", (req, res) => {
//     res.send(index.html);
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

/* First Try*/ 

// const express = require("express");
// const mongojs = require("mongojs");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// require("./routes/api-routes.js");
// require("./routes/html-routes.js");

//const db = require("./models");
//console.log(db);
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

// const databaseUrl = "WorkoutTracker";
// const collections = ["workout"];

// const db = mongojs(databaseUrl, collections);

// db.on("error", error => {
//     console.log("Database Error:", error);
// });

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/WorkoutTracker", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// app.get("/", (req, res) => {
//     res.send(index.html);
// });

// app.get("/exercise", (req, res) => {
//     res.send(exercise.html);
// });

// app.get("/stats", (req, res) => {
//     res.send(stats.html);
// });

// app.get("/index", (req, res) => {
//     res.send(index.html);
// });

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
// });


// const express = require("express");
// // const mongojs = require("mongojs");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const path = require("path");

// const PORT = process.env.PORT || 3000;

// // const db = require("./models");

// const app = express();

// app.use(logger("dev"));
// app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout_trackerdb',
//     { useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(error => handleError(error));
  
// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// app.listen(PORT, () => {
//     console.log(`App running on port ${PORT}!`);
// });
