import React, { useState } from 'react';
import './slider.css';

const Slider = ({ obrazy }) => {
    const [biezacyIndeks, ustawBiezacyIndeks] = useState(0);
  
    const kolejnySlajd = () => {
      const nowyIndeks = (biezacyIndeks + 1) % obrazy.length;
      ustawBiezacyIndeks(nowyIndeks);
    };
  
    const poprzedniSlajd = () => {
      const nowyIndeks = (biezacyIndeks - 1 + obrazy.length) % obrazy.length;
      ustawBiezacyIndeks(nowyIndeks);
    };
  
    return (
      <div className="slider">
        <button className="poprzedny" onClick={poprzedniSlajd}>{'<'}</button>
        <img src={obrazy[biezacyIndeks]} alt={`Slajd ${biezacyIndeks}`} />
        <button className='nastepny' onClick={kolejnySlajd}> {'>'} </button>
      </div>
    );
};

export default Slider;

