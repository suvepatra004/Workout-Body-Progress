const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const workoutsRoutes = require("./routes/workouts");

// express app
const app = express();

// MIDDLEWARE
// to parse JSON bodies
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutsRoutes);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Start the server
    app.listen(process.env.PORT, () =>
      console.log(`Server is running on http://localhost:${process.env.PORT}`)
    );
  })
  .catch((error) => {
    console.log(error.message);
  });
