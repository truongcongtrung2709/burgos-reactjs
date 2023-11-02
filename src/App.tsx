import 'animate.css';
import './style.css'
import {BrowserRouter, Route , Routes } from "react-router-dom"
import Home from './modules/Home'
import RootLayout from './components/RootLayout'
import Cart from './modules/Cart';
import { ShoppingCartProvider } from './context/ShopingCartContext';
import 'animate.css/animate.min.css';
import About from './modules/About';
import Contact from './modules/Contact';
import Blog from './modules/Blog';
import Products from './modules/Products';
import ProductDetails from './modules/ProductDetails';
import BlogDetails from './modules/BlogDetails';
import CheckOut from './modules/CheckOut';
function App(){
  return (
    <ShoppingCartProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path="/products/:productId" element={<ProductDetails/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path="/blog/:blogId" element={<BlogDetails/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </ShoppingCartProvider>
  )
}

export default App
