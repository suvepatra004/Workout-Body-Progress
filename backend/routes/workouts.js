const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

module.exports = router;
