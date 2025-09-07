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
