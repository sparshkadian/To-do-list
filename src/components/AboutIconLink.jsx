import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AboutIconLink() {
  return (
    <div>
      <FontAwesomeIcon
        className='about-link'
        icon={faQuestion}
        size='2x'
        color='rgba(91, 204, 246)'
      />
    </div>
  );
}

export default AboutIconLink;
