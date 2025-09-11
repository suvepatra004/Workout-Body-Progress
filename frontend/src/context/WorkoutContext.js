import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: state.workouts.filter(
          (workout) => workout._id !== action.payload._id
        ),
      };
    default:
      return state;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });
  //
  return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};

/**
 * ------- Workout Context Provider ---------
 * 1. Main component logo.
 * 2. Also can add the next chanegs.
 *
 * Why to use Context?
 * 1. It is a way to pass data to a component tree without having to pass props down manually at every level.
 * 2. It is a way to centralize state management in a React application.
 *
 * Why WorkoutContextProvider?
 * 1. It is a React component that wraps the children components and provides the context to them.
 * 2. It is a way to centralize state management in a React application.
 *
 * Why dispatch switch case is used?
 * 1. It is a way to handle different actions that can be triggered by the user.
 * 2. It is a way to centralize state management in a React application.
 *
 *
 */
