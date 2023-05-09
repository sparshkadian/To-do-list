import { useContext } from 'react';
import TasksContext from '../Context/TasksContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function TasksStats() {
  const { data, TasksCompleted } = useContext(TasksContext);

  return (
    <div className='stats-container'>
      <p>
        Total Number of Tasks <FontAwesomeIcon icon={faArrowRight} />{' '}
        {data.length}
      </p>
      <p>
        Total Tasks Completed <FontAwesomeIcon icon={faArrowRight} />{' '}
        {TasksCompleted}
      </p>
    </div>
  );
}

export default TasksStats;
