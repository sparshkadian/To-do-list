import SingleItem from './SingleItem';
import { useContext } from 'react';
import TasksContext from '../Context/TasksContext';

function ListItems() {
  const { data } = useContext(TasksContext);

  return (
    <div>
      {data.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ListItems;
