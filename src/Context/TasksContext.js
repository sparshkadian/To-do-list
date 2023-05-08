import { useState, createContext } from 'react';

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const handleAdd = (Data) => {
    setData([Data, ...data]);
  };

  const handleDelete = (id) => {
    setData(
      data.filter((item) => {
        return item.id !== id;
      })
    );
  };

  return (
    <TasksContext.Provider value={{ data, handleAdd, handleDelete }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContext;
