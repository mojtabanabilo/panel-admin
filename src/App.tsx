import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { setStateResize } from './utils/functions/functions';
import { useMyContext } from './context/context';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Signup from './components/sign up/Signup';
import Main from './components/main/Main';
import ModalCreateItem from './components/modal/ModalCreateItem';
import ModalEditItem from './components/modal/ModalEditItem';

function App() {  
  // context
  const {setUserWidth, data, setData, setModalAdd, modalAdd, modalEdit} = useMyContext();

  // lifecycle
  useEffect(() => {
    setStateResize(setUserWidth);
  }, []);

  return (
    <div className="App">
      {modalAdd && <ModalCreateItem />}
      {/* {modalEdit && <ModalEditItem />} */}
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/main' element={<Main />}/>
        <Route path='/editItem/:indexItem' element={<ModalEditItem />}/>
      </Routes>
    </div>
  );
}

export default App;