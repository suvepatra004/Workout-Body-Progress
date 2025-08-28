const express = require("express");

const PORT = process.env.PORT || 3000;
const workoutsRoutes = require("./routes/workouts");

// express app
const app = express();

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutsRoutes);

// Start the server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
