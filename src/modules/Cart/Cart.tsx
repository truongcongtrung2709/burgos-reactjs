import Banner from "../../components/Banner"
import CartTotal from "./CartTotal"

const Cart = () => {
  const bannerInfo = {
    name: 'Cart',
    description:'Diam ut venenatis tellus in metus vulputate eu. Placerat in egestas erat imperdiet. Velit euismod in pellentesque massa placerat duis.',
    bannerImg : 'assets/images/bg-cart.webp'
  }
  return (
    <div className="bg-gray-color">
    <Banner name={bannerInfo.name} description={bannerInfo.description} bannerImage={bannerInfo.bannerImg}/>
    <CartTotal/>
    </div>
  )
}

export default Cart