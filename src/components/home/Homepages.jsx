import React from 'react'
import Hero from './hero/Hero';
import Home from './mainContent/homes/Home';
import Discover from './discover/Discover';

const Homepages = () => {
   return (
      <div>
         <Hero />
         <Home />
         <Discover />
      </div>
   );
};

export default Homepages;