const express = require("express");
const { Workout } = require("../models/workoutModel");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

// GET a single workout by ID
router.get("/:id", (req, res) => {
  res.json({ message: "GET a single workout" });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  res.json({ message: "POST a new workout" });

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a workout by ID
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a single workout" });
});

// PATCH (update) a workout by ID
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a single workout" });
});

module.exports = router;
