const express = require("express");
const { Workout } = require("../models/workoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout by ID
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout by ID
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single workout" });
});

// PATCH (update) a workout by ID
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a single workout" });
});

module.exports = router;
