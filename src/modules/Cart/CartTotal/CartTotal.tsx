import { useEffect, useState} from 'react'
import {faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductItem from './ProductItem'
import PaidCartItem from './PaidCartItem'
import { useShoppingCart } from '../../../context/ShopingCartContext'
import { formatCurrency } from '../../../utilities/formatCurrency'
import axios from 'axios'
import { Product } from '../../../types/types'


const CartTotal = () => {
  const {deleteCart,cartItems} = useShoppingCart()
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState<Product[]| null>();
  useEffect(() => {
    const url  = 'https://burgos-be.onrender.com/products'
    axios.get(url).then((res) => setProducts(res.data))

  },[]);

  


 
  return (
    <section className=' py-[24px]'>
      <div className="elemental-container xl:flex xl:justify-between">
      <div className="category xl:max-w-[25%] md:max-w-[20%] md:block hidden mr-3">
        <div className="sticky top-0">
          <div className="rounded-[3px] text-black bg-white">
            <div className="category-header border-b-[1px] border-solid border-gray flex items-center justify-between">
              <div className="px-4 py-3">
                <p className='leading-[20px] font-[500] text-xs'>Category</p>
              </div>
            </div>
            <div className="category-body p-2 overflow-y-auto">
              <li className='m-0 mb-2 px-4 py-[6px] overflow-hidden text-xs font-normal'>
                All products
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="products xl:max-w-[50%] md:max-w-[70%] max-w-full w-full mr-3">
        <div className='products-header sticky bg-white h-16 z-[100] flex  my-0 pr-6 pl-8 pt-3 top-0 '>
          <form  className='w-full rounded-[3px] '>
            <div className="w-full border-0 m-0 inline-flex relative min-w-0 flex-col align-top p-0 ">
              <div className='h-[36px] pl-[14px] relative rounded-[4px] w-full text-black cursor-text inline-flex  text-md  items-center font-normal leading-[1.1876em] border-[1px] border-solid border-dark-gray '>
                <div className="searchEl mr-2 h-[0.01em] flex max-h-[2em] items-center whitespace-nowrap">
                  <FontAwesomeIcon className='text-dark-gray' icon={faSearch} />
                </div>
                <input onChange={(e) => setSearch(e.target.value)}
                 placeholder='what are you looking for?' type="text" className='focus:outline-none w-full h-[1.1876em] block text-sm min-w-0 m-0 pt-1.5 pb-[7px] px-0 ' />
              </div>
            </div>
          </form>
        </div>
        <div className='products-body bg-white '>
        <p className='bg-gray leading-[20px] font-[500] text-md m-0 p-3'>All Products</p>
        <div className="product-list h-[500px] overflow-y-auto bg-white">
        {products?.filter((item)=> {
          return search.toLowerCase()=== '' ? item : item.name.toLowerCase().includes(search.toLowerCase())
        }).map(item => (
        <ProductItem key={item.id} {...item}/>
        ))}
        </div>
        </div>
      </div>
      <div  className={`cart xl:max-w-[25%] xl:block xl:mt-0 mt-6 max-w-full w-full `}>
        <div className="xl:sticky top-0">
          <div className="bg-white text-black rounded-[3px]">
            <div className="cart-header  border-b-[1px] border-solid border-gray flex items-center justify-between">
            <div className="px-4 py-3">
                <p className='leading-[20px] font-[500] text-xs'>Cart</p>
                
              </div>
              <div className="px-4 py-3">
                <p onClick={deleteCart} className='leading-[20px] font-[500] text-xs text-black-navy underline cursor-pointer'>Delete Cart</p>
              </div>
            </div>
            <div className="cart-body border-b-[1px] border-solid border-gray">
              <div className="cart-list p-4 overflow-y-auto h-[500px]">
              {cartItems.map(item => (
                <PaidCartItem key={item.id} {...item}/>
              ))}
                
              </div>
            </div>
            <div className="text-sm text-black font-semibold cart-footer p-4">
              <div className="total flex justify-between">
                <p>Total</p>
                <p>{" "}{formatCurrency(cartItems.reduce((total, cartItem) =>{

const item = products?.find((i) => i.id === cartItem.id)

return total + (item?.price||0) * cartItem.quantity
},0)
)}</p>
              </div>
              <a href='/checkout' className='custom-button1 text-center w-full px-2 py-3'>Paid</a>
            </div>
          </div>
        </div>
      </div>
     
      </div>
    </section>
  )
}

export default CartTotal