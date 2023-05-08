import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function AboutIconLink() {
  return (
    <div>
      <Link to='/about'>
        <FontAwesomeIcon
          className='about-link'
          icon={faQuestion}
          size='2x'
          color='rgba(91, 204, 246)'
        />
      </Link>
    </div>
  );
}

export default AboutIconLink;
