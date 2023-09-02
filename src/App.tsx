import { useState, useEffect } from 'react';
import { TUserWidth } from './utils/types/type';
import { Routes, Route } from 'react-router-dom';
import { setStateResize } from './utils/functions/functions';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Signup from './components/sign up/Signup';
import Main from './components/navbar/Navbar';

function App() {  
  // lifecycle
  useEffect(() => {
    setStateResize(setUserWidth);
  }, []);

  // states
  // const [signUp, setSignUp] = useState<boolean>(true);
  const [userWidth, setUserWidth] = useState<TUserWidth>(null);
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Signup userScreen={userWidth}/>}/>
        <Route path='/main' element={<Main />}/>
      </Routes>
    </div>
  );
}

export default App;
