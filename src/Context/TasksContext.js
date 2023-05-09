import { useState, createContext } from 'react';

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [TasksCompleted, setTasksCompleted] = useState(0);
  const reset_priority = 0;

  const handleAdd = (Data) => {
    setData([...data, Data]);
  };

  const handleDelete = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );

    setTasksCompleted(TasksCompleted + 1);
  };

  return (
    <TasksContext.Provider
      value={{ data, TasksCompleted, reset_priority, handleAdd, handleDelete }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
