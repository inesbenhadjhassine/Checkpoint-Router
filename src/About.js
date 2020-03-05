import React from 'react';
import './App.css';
import Danielsw from './Danielsw.jpg';

function About() {
  return (
    <div>

<img src={Danielsw} alt="Daniel Swarovski"  className="imagec" />
<br />
<span className="intro"> 
Daniel Swarovski was born in northern Bohemia (now the Czech Republic), 20 km from the current border with Poland.His father was a glass cutter and owned a small glass factory. It was there that the young Swarovski served an apprenticeship, becoming skilled in the art of glass-cutting. In 1892 he patented an electric cutting machine that facilitated the production of crystal glass.
In 1895, Swarovski, financier Armand Kosmann, and Franz Weis founded the Swarovski company, originally known as A. Kosmann, D. Swarovski & Co. and shortened to KS & Co.The company established a crystal-cutting factory in Wattens, Tyrol (Austria), to take advantage of local hydroelectricity for the energy-intensive grinding processes Daniel Swarovski had patented. Swarovski's vision was to make "a diamond for everyone" by making crystals affordable.

In 1899, it first used the edelweiss flower in its logo and expanded to France, where it was known as Pierres Taillées du Tyrol ("Cut stones from Tyrol"). In 1919, Swarovski founded Tyrolit, bringing the grinding and polishing tools from the crystal business into a different market.
In 1935, Swarovski's son Wilhelm created a customized pair of binoculars, which led to the launch of Swarovski Optik 14 years later. Swarovski Optik manufactures optical instruments such as binoculars, spotting scopes, rifle scopes and telescopes.[5]

In 1977, Swarovski entered the jewellery market in the United States.

Nadja Swarovski, the founder's great-great granddaughter, became the first female member of the Swarovski executive board in 2012.

Victoria Swarovski, one of the current generation Swarovski's was the winner of Let's Dance (German TV series), and current co-host of that, and also a former judge on Das Supertalent, and a singer, and influencer. </span>
    </div>
  );
}

export default About;