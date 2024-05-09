import React, { useState } from 'react';
import './App.css';
import Menu from './Menu';
import Slider from './Slider';

function App() {
    const [czyMenuOtwarte, setCzyMenuOtwarte] = useState(false);
    
    const zmienMenu = () => {
      setCzyMenuOtwarte(!czyMenuOtwarte);
    };

    const obrazy1 = [
      "pistolet.jpg",
      "ak.jpg",
      "zolnierz.jpg"
    ];
  
    const obrazy2 = [
      "pistolet.jpg",
      "ak.jpg",
      "zolnierz.jpg"
    ];
  
    const obrazy3 = [
      "obraz3_1.jpg",
      "obraz3_2.jpg",
      "obraz3_3.jpg"
    ];


  return (
    <div className='milit'>
      <header className='glowa'>
        <h1>Militaria</h1>
        <button className='menu' onClick={zmienMenu}>Menu</button>
      </header>
      <div className='mOtwarte'>
        {czyMenuOtwarte && <Menu />}
      </div>
      <div class="container">
        <div class="section"><Slider obrazy={obrazy1.map(image => `images/${image}`)}/></div>
        <div class="section"><Slider obrazy={obrazy2.map(image => `images/${image}`)}/></div>
        <div class="section"><Slider obrazy={obrazy3.map(image => `images/${image}`)}/></div>
      </div>
      <footer>
        <p>&copy; 2024 Militaria</p>
      </footer>
    </div>
  );
}

export default App;
