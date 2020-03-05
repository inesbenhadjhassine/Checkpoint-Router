import React from 'react';
import './App.css';
import Figun from './Figun.jpg';
import Figdeux from './Figdeux.jpg';
import Figtrois from './Figtrois.jpg';
import Figsix from './Figsix.jpg';


function Shop() {
  return (
    <div>
<h1>Collection 2020</h1>
<img src={Figun} alt="article un" />
<img src={Figdeux} alt="article deux" />
<img src={Figtrois} alt="article trois" />
<img src={Figsix} alt="article six" />
    </div>
  );
}

export default Shop;