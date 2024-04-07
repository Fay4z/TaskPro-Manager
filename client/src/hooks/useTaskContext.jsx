import { taskContext } from "@/context/taskContext";
import { useContext } from "react";

const useTaskContext = () => {
  const context = useContext(taskContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};

export default useTaskContext;
