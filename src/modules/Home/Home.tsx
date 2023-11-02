import React from 'react'
import Banner from './Banner'
import Products from "./Products"
import OurProducts from "./OurProducts"
import Instruction from './Instruction'
import Contact from './Contact'
import Follow from './Follow'
import Albums from './Albums'
import ShopingCart from './ShopingCart'

const Home:React.FC = () => {
  return (
    <div className='bg-body-background bg-center bg-repeat '>
    <Banner/>
    <Products/>
    <OurProducts/>
    <Instruction/>
    <Contact/>
    <Follow/>
    <Albums/>
    <ShopingCart/>
    </div>
  )
}

export default Home