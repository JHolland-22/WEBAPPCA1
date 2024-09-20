import React, { useState } from 'react'; 
import './App.css';
import Movie from './components/Ca1'; 


function App() {
  const [hoveredMovie, setHoveredMovie] = useState(''); 

  return (
    <div className="container">
      <h1>Movies App</h1>

      <Movie
        title="Horror"
        deadline="Smile"
        description="Sinister, Creepy, Jumpscare"
        onMouseEnter={() => setHoveredMovie('Horror')}
        onMouseLeave={() => setHoveredMovie('')}
        hoveredMovie={hoveredMovie}
      />

      <Movie
        title="Comedy"
        deadline="GrownUps"
        description="Heartfelt, Comical"
        onMouseEnter={() => setHoveredMovie('Comedy')}
        onMouseLeave={() => setHoveredMovie('')}
        hoveredMovie={hoveredMovie}
      />

      <Movie
        title="Romance"
        deadline="Notebook"
        description="Need tissues"
        onMouseEnter={() => setHoveredMovie('Romance')}
        onMouseLeave={() => setHoveredMovie('')}
        hoveredMovie={hoveredMovie}
      />
    </div>
  );
}

export default App;
