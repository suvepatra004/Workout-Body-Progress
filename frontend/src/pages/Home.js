import { useEffect, useState } from "react";

const Home = () => {
  const [workouts, setWorkouts] = useState(null);
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("localhost:3010/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      } else {
        console.log("error fetching workouts");
      }
    };

    fetchWorkouts();
  });

  return (
    <div className="home">
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
