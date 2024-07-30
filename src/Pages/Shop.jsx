import React from 'react'
import Shopping from '../Component/Shopping/Shopping'
import Hero from '../Component/Hero/Hero'
import NewsLetter from '../Component/NewsLatter/NewsLetter'
import NewCollection from '../Component/NewCollection/NewCollection'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <NewCollection/>
      <Shopping/>
      <NewsLetter/>
    </div>
  )
}

export default Shop