import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    } else if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("new workout added", json);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form action="" className="workout-form" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      {/* Exercise Title input */}
      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      {/* Load input */}
      <label>Load (in kg):</label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
      />

      {/* Reps input */}
      <label>Reps :</label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;

/**
 * ---------- WorkoutForm Component -----------
 *
 * This component provides a form for users to add a new workout.
 * It includes input fields for the exercise title, load (in kg), and number of reps.
 * The component uses React's useState hook to manage the state of each input field.
 * if response.ok is true then it will clear the input fields and set error to null.
 *
 * State Variables:
 * - title: Stores the title of the workout (string).
 * - title: Stores the title of the workout (string).
 * - load: Stores the load in kilograms (number).
 * - reps: Stores the number of repetitions (number).
 *
 * Each input field has an onChange event handler that updates the corresponding state variable
 * whenever the user types in the input field. The value of each input field is bound to its
 * respective state variable to ensure that the displayed value is always in sync with the state.
 * The form has a submit button that, when clicked, triggers the handleSubmit function.
 * The handleSubmit function prevents the default form submission behavior, constructs a workout object
 *
 *
 * Note: This component currently does not handle form submission or validation. Additional functionality
 * can be added to handle these aspects as needed.
 *
 * -----------------------------------------------
 */
