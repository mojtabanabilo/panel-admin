import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { setStateResize } from './utils/functions/functions';
import { useMyContext } from './context/context';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Signup from './components/sign up/Signup';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';

function App() {  
  // context
  const {setUserWidth, sidebar} = useMyContext(); 

  // lifecycle
  useEffect(() => {
    setStateResize(setUserWidth);
  }, []);

  return (
    <div className="App">
      {sidebar && <Sidebar />} 
      <Routes>
        <Route path='/' element={<Signup />}/>
        <Route path='/main' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;