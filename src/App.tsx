import React, { useState, useEffect } from 'react';
import { TUserWidth } from './utils/types/type';
import './App.scss';

// components
import Signup from './components/sign up/Signup';

function App() {
  useEffect(() => {
    const handleResizeWindow = () => setUserWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
       window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  // states
  const [signUp, setSignUp] = useState<boolean>(true);
  const [userWidth, setUserWidth] = useState<TUserWidth>(null);

  return (
    <div className="App">
      <Signup userScreen={userWidth}/>
    </div>
  );
}

export default App;
