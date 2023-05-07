import React from 'react';
import Card from './shared/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SingleItem({ item }) {
  return (
    <Card>
      <div className='task-display'>
        <p className='task-display'>{item.text}</p>
        <p className='task-priority'>'priority'</p>
        <FontAwesomeIcon className='delete-task-icon' icon={faXmark} />
      </div>
    </Card>
  );
}

export default SingleItem;
