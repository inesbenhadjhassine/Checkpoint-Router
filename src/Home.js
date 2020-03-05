import React from 'react';
import './App.css';
import Monjewellery from './Monjewellery.jpg';
import Logomag from './Logomag.png';


function Home() {
  return (
    <div>
<img src={Logomag} alt="Mon logomag" />
<img src={Monjewellery} alt="Mon magazin" />

    </div>
  );
}

export default Home;