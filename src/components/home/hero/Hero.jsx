import React, { useState } from "react"
import { hero } from "../../../dummyData"
import "./hero.css"
import Card from "./Card"

const Hero = () => {
   const [items] = useState(hero)

   return (
      <div>
         <section className='hero'>
            <div className='container'>
               {items.map((item) => {
                  return (
                     <Card key={item.id} item={item} />
                  )
               })}
            </div>
         </section>
      </div>
   )
}

export default Hero
