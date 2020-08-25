import React, { useEffect } from 'react';
import Routes from './routes';

function App() {

  useEffect(() => {
    const splashScreen = document.getElementById('splash-screen');
    splashScreen.style.display = "none";
  }, []);

  return (
    <Routes />
  );
}

export default App;
