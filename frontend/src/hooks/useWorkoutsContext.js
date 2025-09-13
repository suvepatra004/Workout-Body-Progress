import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutsContextProvider"
    );
  }
  return context;
};

/**
 * useWorkoutsContext is a custom hook that returns the current value of the WorkoutsContext.
 * If the context is not available, it throws an error.
 *
 * It is used to access the state and actions of the WorkoutsContext in a functional component.
 *
 * Usage:
 * import useWorkoutsContext from "./hooks/useWorkoutsContext";
 *
 * const { state, dispatch } = useWorkoutsContext();
 */
