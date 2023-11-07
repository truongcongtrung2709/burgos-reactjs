import { useEffect } from 'react'
import Banner from '../../components/Banner'
import OrderDetails from './OrderDetails'
import { useShoppingCart } from '../../context/ShopingCartContext';
import { useNavigate } from 'react-router-dom';


const CheckOut = () => {
  const{cartItems}= useShoppingCart();
  const navigate = useNavigate()
  useEffect(() =>{
    if(cartItems.length === 0)
    {
      navigate("/cart")
      alert("You dont have any cart items")

    }
  },[cartItems])
  const bannerInfo = {
    name: 'Check Out',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/checkout-bg.webp',
  }
  
  return (
  <div className='bg-white'>
    <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg}/>
    <div className="container py-[46px] lg:py-[96px]">
      <div className="checkout__content row flex-col col">
        <OrderDetails  />

      </div>
    
    </div>
  </div>
  )
}

export default CheckOut