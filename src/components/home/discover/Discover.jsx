import React from 'react';
import "./style.css"
import Heading from '../../common/heading/Heading';
import { discover } from '../../../dummyData';

const Discover = () => {
   return (
      <div>
         <section className='discover'>
            <div className='container'>
               <Heading title='Discover' />
               <div className='content'>
                  {discover.map((val) => {
                     return (
                        <div className='box' key={val.title}>
                           <div className='img'>
                              <img src={val.cover} alt='' />
                           </div>
                           <h1 className='title'>{val.title}</h1>
                        </div>
                     )
                  })}
               </div>
            </div>
         </section>
      </div>
   );
};

export default Discover;