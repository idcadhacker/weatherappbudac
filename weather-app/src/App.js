import React from 'react';
import './App.css';
import WeatherApp from './WeatherApp';
 
function App() {
  return (
<div className="App">
<header className="App-header">
<h1>Počasí</h1>
</header>
<main>
  <h4>rozklikněte město pro zobrazení dat</h4>
<WeatherApp />
</main>
</div>
  );
}
 
export default App;