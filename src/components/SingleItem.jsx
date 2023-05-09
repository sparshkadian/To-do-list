import React from 'react';
import Card from './shared/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import TasksContext from '../Context/TasksContext';

function SingleItem({ item }) {
  const { handleDelete } = useContext(TasksContext);

  return (
    <Card>
      <div className='task-display'>
        <p className='task-display'>{item.text}</p>
        <button
          onClick={() => {
            handleDelete(item.id);
          }}
          className='delete-task-icon'
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <p className='task-priority'>{item.priority}</p>
    </Card>
  );
}

export default SingleItem;
