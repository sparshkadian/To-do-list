import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import AboutIconLink from './components/AboutIconLink';
import { TaskProvider } from './Context/TasksContext';
import AboutPage from './pages/AboutPage';
import TasksStats from './components/TasksStats';

function App() {
  return (
    <Router>
      <TaskProvider>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <AddItem />
                  <TasksStats />
                  <ListItems />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </TaskProvider>
    </Router>
  );
}
export default App;
