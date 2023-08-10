var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

// var usersRouter = require("./routes/users");
// var userRouter = require("./routes/user");
var taskRouter = require('./routes/tasks');

var app = express();

require("dotenv").config();
var cors = require("cors");
// var favicon = require("serve-favicon");
// const session = require("express-session");


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to Database"));

var createError = require("http-errors");
const IS_PRODUCTION = app.get("env") === "production";

if (IS_PRODUCTION) {
  app.set("trust proxy", 1); // secures the app if it is running behind Nginx/Apache/similar
}
app.use(cors()); // allows cross domain requests
// app.use(favicon(path.join(__dirname, '../public', 'favicon.ico'))) // <-- location of favicon

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.resolve(__dirname, "./frontend/build")));
// app.use(express.static("public"));
// app.use('/images', express.static('images'))
app.use('/images', express.static(path.resolve(__dirname,'images')));



// app.use("/users", usersRouter);
// app.use("/user", userRouter);
app.use("/task", taskRouter);


app.get("*", (req,res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', "index.html"))
})

// create and error object,catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
//  {status: 404, message: “page not found”}

// error handler executed when calling next(err) err bl server
app.use(function (err, req, res, next) {
  res.status(err.status || 500).send({
    success: false,
    message: err.message
  });
});



module.exports = app;