import React, { useState } from 'react';
import './App.css';
import WeatherApp from './WeatherApp';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Počasí</h1>
      </header>
      <main>
        {!isLoggedIn ? (
          <Login onLogin={() => setIsLoggedIn(true)} />
        ) : (
          <>
            <WeatherApp />
          </>
        )}
      </main>
    </div>
  );
}
 
export default App;
