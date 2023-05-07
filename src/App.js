import { useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import AboutIconLink from './components/AboutIconLink';

function App() {
  const [data, setData] = useState([]);

  const handleAdd = (Data) => {
    setData([Data, ...data]);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <AddItem getData={(Data) => handleAdd(Data)} />
        <ListItems data={data} />
      </div>
      <AboutIconLink />
    </>
  );
}
export default App;
