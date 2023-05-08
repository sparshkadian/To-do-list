import { useState, createContext } from 'react';

const TasksContext = createContext();

export const TaskProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const handleAdd = (Data) => {
    let key = Data.id;
    let value = Data.text;

    setData([Data, ...data]);

    localStorage.setItem(key, value);
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
