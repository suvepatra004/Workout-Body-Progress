import { useEffect, useState } from "react";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      } else {
        console.log("error fetching workouts");
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;

/**
   * eveloped a React-based Home dashboard that fetches workout data from an API and manages state using React Hooks (useState, useEffect).

  * Implemented dynamic rendering of workout details using reusable components for better modularity and maintainability.

  * Integrated a WorkoutForm component to allow users to add new workouts, ensuring smooth data flow and real-time UI updates.
 */
