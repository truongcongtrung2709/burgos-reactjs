import React from 'react'
import Banner from './Banner'
import Features from "./Features"
import Instruction from './Instruction'
import Contact from './Contact'
import Follow from './Follow'
import Albums from './Albums'
import ShopingCart from './ShopingCart'
import Products from './Products'

const Home:React.FC = () => {
  return (
    <div className='bg-body-background bg-center bg-repeat '>
    <Banner/>
    <Features/>
    <Products/>
    <Instruction/>
    <Contact/>
    <Follow/>
    <Albums/>
    <ShopingCart/>
    </div>
  )
}

export default Home