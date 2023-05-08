import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className='container about-container'>
      <p>This is a To-do List Web App made using React</p>
      <p>Version: 1.0.0</p>
      <p>Dev: Sparsh Kadian</p>
      <Link to='/'>Back to Home</Link>
    </div>
  );
}

export default AboutPage;
