import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import burgerData from "../../../../data/data.json"
import { useShoppingCart } from '../../../../context/ShopingCartContext'

type CartTotalProps = {
  id:number,
  quantity:number
}
const PaidCartItem = ({id,quantity} : CartTotalProps) => {
  const {increaseCartQuantity, decreaseCartQuantity} = useShoppingCart()
  const item = burgerData.find(i => i.id === id);
  if(item ==null) return null;
  return (
    <>
    <div className="cart-item flex justify-between">
                    <h3 className='text-sm text-black font-semibold mr-2'>{item.name}</h3>
                    
              
                  <div className="quantity flex items-center">
                  <button onClick={()=>decreaseCartQuantity(id)} className='bg-hero-pattern w-5 h-5 rounded-full'><FontAwesomeIcon className='text-white-color p-[2px] ' icon={faMinus}/></button>
                  <div  className='w-10 text-center'>
                    {quantity}
                  </div>
                  <button onClick={()=>increaseCartQuantity(id)} className='bg-hero-pattern w-5 h-5 rounded-full'><FontAwesomeIcon className='text-white-color p-[2px] ' icon={faPlus}/></button>
                  </div>
                </div>
                  <input type="text" placeholder='note...' className='w-full text-center'  />
                  </>
  )
}

export default PaidCartItem