import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faPlus } from '@fortawesome/free-solid-svg-icons';
import Button from './shared/Button';
import TasksContext from '../Context/TasksContext';

function AddItem() {
  const [text, setText] = useState('');
  const [message, setMessage] = useState(null);

  const { handleAdd } = useContext(TasksContext);
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputText = document.getElementById('new_work').value;

    if (inputText === '') {
      setMessage('No Input Detected');
    } else {
      setMessage(null);
      setText('');

      const newItem = {
        id: uuidv4(),
        text,
      };

      handleAdd(newItem);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <input
            onChange={handleTextChange}
            type='text'
            name='new_work'
            id='new_work'
            placeholder='Add New Task'
            value={text}
          />
          <Button type='submit' className='btn btn-add'>
            <FontAwesomeIcon icon={faPlus} size='2x' />
          </Button>
        </div>
      </form>
      {message && (
        <div className='no-input-message'>
          {message} <FontAwesomeIcon icon={faExclamation} shake />
        </div>
      )}
    </>
  );
}

export default AddItem;
