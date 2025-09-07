const WorkoutDetails = ({ workout }) => {
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Load (kg)</strong>
            </td>
            <td> </td>
            <td>{workout.load}</td>
          </tr>
          <tr>
            <td>
              <strong>Reps</strong>
            </td>
            <td> </td>
            <td>{workout.reps}</td>
          </tr>
          <tr>
            <td>
              <strong>Created At</strong>
            </td>
            <td> </td>
            <td>{new Date(workout.createdAt).toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutDetails;

/**
 * ---------- WorkoutDetails Component -----------
 *
 * This component displays the details of a single workout.
 * It receives a 'workout' object as a prop and renders its title,
 * load, reps, and creation date in a structured format.
 *
 * Props:
 * - workout: An object containing the workout details with the following properties:
 *   - title: The title of the workout (string).
 *   - load: The load in kilograms (number).
 *   - reps: The number of repetitions (number).
 *   - createdAt: The date and time when the workout was created (string or Date object).
 *
 * Example usage:
 * <WorkoutDetails workout={workout} />
 *
 * Styling is applied via CSS classes to ensure a clean and organized layout.
 *
 * Note: Ensure that the 'workout' prop is provided and contains valid data to avoid rendering issues.
 *
 * -----------------------------------------------
 */
