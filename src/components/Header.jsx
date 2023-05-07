import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header>
      <p className='title'>To-do List</p>
      <span className='pencil-icon'>
        <FontAwesomeIcon icon={faPencil} beat />
      </span>
    </header>
  );
}

export default Header;
