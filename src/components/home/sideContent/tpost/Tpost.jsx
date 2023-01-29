import React from "react"
import { tpost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./tpost.css"

const Tpost = () => {
   return (
      <div>
         <section className='tpost'>
            <Heading title='Tiktok post' />
            {tpost.map((val) => {
               return (
                  <div className='box flexSB' key={val.id}>
                     <div className='img'>
                        <img src={val.cover} alt='' />
                     </div>
                     <div className='text'>
                        <h1 className='title'>{val.title.slice(0, 35)}...</h1>
                        <span>a year ago</span>
                     </div>
                  </div>
               )
            })}
         </section>
      </div>
   );
};

export default Tpost;