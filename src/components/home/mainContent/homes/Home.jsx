import React from 'react';
import "./style.css";
import Popular from '../popular/Popular';
import Ppost from '../Ppost/Ppost';
import Life from '../life/Life';
import Music from '../musics/Musics';
import Side from '../../sideContent/side/Side';

const Home = () => {
   return (
      <div>
         <main>
            <div className="container">
               <section className='mainContent'>
                  <Popular />
                  <Ppost />
                  <Life />
                  <Music />
               </section>
               <section className='sideContent'>
                  <Side />
               </section>
            </div>
         </main>
      </div>
   );
};

export default Home;