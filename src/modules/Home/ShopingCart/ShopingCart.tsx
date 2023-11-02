import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import burgerData from "../../../data/data.json"
import { useShoppingCart } from '../../../context/ShopingCartContext';
import CartItem from './CartItem';
import { formatCurrency } from '../../../utilities/formatCurrency';
type ShopingCartProps={
  isOpen?: boolean
}

const ShopingCart = ({isOpen} : ShopingCartProps) => {
  const {closeCart,openCart, cartQuantity, cartItems}= useShoppingCart();
  return (
    <div className="shopping_cartwrapper">
        <div onClick={openCart} className={`shopping-cart flex z-[2] fixed cursor-pointer rounded-[50%] left-[4%] bottom-[1%]`} >
          <span className="shopping-cart text-yellow-color leading-[1] text-[40px]"><FontAwesomeIcon icon={faCartShopping} /> </span> 
            <span id="mini-cart-count_footer" className='text-white-color bg-[#fd0000] text-white right-[-9px] text-center text-[12px] leading-[21px] min-w-[12px] transition-transform duration-[0.3s] absolute font-semibold px-[7px] py-0 rounded-[2rem] top-0'>
            {cartQuantity}     
            </span>
          </div>
          <div id="pm_menu" className={`${isOpen ? "" :"invisible"} pm_open fixed h-full w-[300px] z-[999999]  text-center  ease-[ease] top-0 right-0 bg-white-color`}>
            <div className="close-btnWrap text-left pl-[10%] bg-dark-gray-color">
              <span onClick={closeCart} className="close-btn w-full block cursor-pointer">×</span>
            </div>
        <div className="car_count_title">
        <ul className=" cart_list_widget h-[calc(100vh_-_150px)] overflow-y-auto text-black m-0 p-2.5 text-left py-6 leading-6 text-[15px]">
          {cartItems.map(item=>(
            <CartItem key={item.id} {...item}/>
          ))}
        
      </ul>
      <div className="wcf-min-bottom-part w-full absolute mt-[10%] bottom-0 bg-[#ddd]">
        <p className="sub_total_cat text-lg font-extrabold mb-0 font-nunito mt-[5%] text-[#000] pt-[10px] m-0">Sub Total:{" "}{formatCurrency(cartItems.reduce((total, cartItem) =>{

          const item = burgerData.find((i) => i.id === cartItem.id)
          
          return total + (item?.price||0) * cartItem.quantity
        },0)
        )}
        </p>
        <p className="woo-commerce_mini_cart_button uppercase text-sm rounded font-normal inline-block min-w-[100px] min-h-[31px] mb-[22px] pt-1">
          <a className='text-white-color rounded inline-block min-w-[100px] min-h-[31px] text-white font-bold transition-all duration-[0.3s] ease-[ease] mx-2.5 my-0 p-2 bg-orange-color' href="/cart">Cart</a>
        </p>
        <p className="woo-commerce_mini_cart_button uppercase text-sm rounded font-normal inline-block min-w-[100px] min-h-[31px] mb-[22px] pt-1">
          <a href='/checkout'  className='text-white-color bg-orange-color inline-block min-w-[100px] min-h-[31px] text-white font-bold transition-all duration-[0.3s] ease-[ease] mx-2.5 my-0 p-2 uppercase'>Checkout</a>
        </p>
      </div>
          <p className="cart__empty_message absolute w-full text-xl text-black -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 hidden">No product in the cart.</p>
        </div>
        </div>
        <div onClick={closeCart}  style={{visibility: isOpen? 'visible': 'hidden'}} className={`pm_overlay w-full h-full fixed z-[1000] invisible bg-black-overlay  m-0 p-0 left-0 top-0`}></div>
      </div>
  )
}

export default ShopingCart