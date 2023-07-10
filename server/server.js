const express = require("express");
const app = express();
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const cors = require('cors');
const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const path = require("path");

const corsOptions = {
  origin: 'http://localhost:3001',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization, basiq-version',
};

// CORS middleware should be placed here
// app.use(cors(corsOptions));

// Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

// Connect To Database
connectDB();

// Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Logging
app.use(logger("dev"));

// Use forms for PUT / DELETE
app.use(methodOverride("_method"));

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use flash messages for errors, info, etc...
app.use(flash());

// Setup Routes for which the server is listening
app.use("/", mainRoutes);

// Serve static files from the build directory
app.use(express.static(path.join(__dirname, "../client/build")));

// Catch-all route for serving React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

// Server Running
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
