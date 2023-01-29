import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import SocialMedia from "../social/SocialMedia"
import Tpost from "../tpost/Tpost"

const Side = () => {

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
   }

   const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
   return (
      <div>
         <Heading title='Stay Connected' />
         <SocialMedia />

         <Heading title='Subscribe' />

         <section className='subscribe'>
            <h1 className='title'>Subscribe to our New Stories</h1>
            <form action=''>
               <input type='email' placeholder='Email Address...' />
               <button>
                  <i className='fa fa-paper-plane'></i> SUBMIT
               </button>
            </form>
         </section>

         <section className='banner'>
            <img src='./images/sidebar-banner-new.jpg' alt='' />
         </section>

         <Tpost />

         <section className='categories'>
            <Heading title='Categories' />
            {/*<div className='items'>{allCat}</div>*/}
            {catgeory.map((val, index) => {
               return (
                  <div className='category category1' key={index}>
                     <span>{val}</span>
                  </div>
               )
            })}
         </section>

         <section className='gallery'>
            <Heading title='Gallery' />
            <Slider {...settings}>
               {gallery.map((val, index) => {
                  return (
                     <div className='img' key={index}>
                        <img src={val.cover} alt='' />
                     </div>
                  )
               })}
            </Slider>
         </section>
      </div>
   )
}

export default Side
