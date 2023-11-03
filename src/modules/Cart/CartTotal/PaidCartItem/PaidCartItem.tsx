import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useShoppingCart } from '../../../../context/ShopingCartContext'
import { useEffect, useState } from 'react'
import { Product } from '../../../../types/types'
import axios from 'axios'

type CartTotalProps = {
  id:number,
  quantity:number
}
const PaidCartItem = ({id,quantity} : CartTotalProps) => {
  const {increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
  const [products, setProducts] = useState<Product[]| null>();
  useEffect(() => {
    const url  = 'https://burgos-be.onrender.com/products'
    axios.get(url).then((res) => setProducts(res.data))

  },[id]);
  const item = products?.find(i => i.id === id);
  if(item ==null) return null;
  return (
    <>
    <div className="cart-item flex justify-between">
                    <h3 className='text-sm text-black font-semibold mr-2'>{item.name}</h3>
                    
              
                  <div className="quantity flex items-center">
                  <button onClick={()=>decreaseCartQuantity(id)} className='bg-hero-pattern w-5 h-5 rounded-full'><FontAwesomeIcon className='text-white p-[2px] ' icon={faMinus}/></button>
                  <div  className='w-10 text-center'>
                    {quantity}
                  </div>
                  <button onClick={()=>increaseCartQuantity(id)} className='bg-hero-pattern w-5 h-5 rounded-full'><FontAwesomeIcon className='text-white p-[2px] ' icon={faPlus}/></button>
                  </div>
                </div>
                  <input type="text" placeholder='note...' className='w-full text-center'  />
                  </>
  )
}

export default PaidCartItem