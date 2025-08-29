const express = require("express");

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
router.post("/", (req, res) => {
  res.json({ message: "POST a new workout" });
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
