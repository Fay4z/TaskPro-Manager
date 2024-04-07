import { createContext, useReducer } from "react";

export const taskContext = createContext();

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASK":
      return {
        tasks: action.payload,
      };
    case "CREATE_TASK":
      return {
        tasks: [action.payload, ...state.tasks],
      };
    case "DEL_TASK":
      return {
        tasks: state.tasks.filter((task) => task._id !== action.payload._id),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };
    default:
      return false;
  }
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: [],
  });
  return (
    <taskContext.Provider value={{ ...state, dispatch }}>
      {children}
    </taskContext.Provider>
  );
};
