const express = require("express");
const { Workout } = require("../models/workoutModel");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getWorkouts);

// GET a single workout by ID
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout by ID
router.delete("/:id", deleteWorkout);

// PATCH (update) a workout by ID
router.patch("/:id", updateWorkout);

module.exports = router;
