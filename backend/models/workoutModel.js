// Here the DB schema and model for workouts will be defined using Mongoose.
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const workoutSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: Number,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

exports.Workout = mongoose.model("Workout", workoutSchema);

/**
 * Module exports the Workout model based on the workoutSchema.
 * This model can be used to interact with the workouts collection in the MongoDB database.
 */
