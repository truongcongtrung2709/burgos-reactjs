import {  faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatCurrency } from '../../../../utilities/formatCurrency'
import { useShoppingCart } from '../../../../context/ShopingCartContext'
type ProductItemProps = {
  id: number,
  image: string, 
  name:string,
  price:number,
}
const ProductItem = ({id,image,name,price}:ProductItemProps) => {
  const {increaseCartQuantity} = useShoppingCart();
  return (
    <div className="product-item flex p-4 ">
    <div className="item-img mr-5">
      <img src={image} width={100} height={100} className='rounded-full object-cover object-center' alt="" />
    </div>
    <div className="item-text relative w-full">
      <h3 className='font-bold text-lg'>{name}</h3>
      <p className='price font-bold text-md text-yellow-color'>{formatCurrency(price)}</p>
      <a href="" className='text-md underline text-black-navy-color cursor-pointer '>Detail</a>
        <button onClick={()=>increaseCartQuantity(id)}><FontAwesomeIcon className='opacity-[0.7] hover:opacity-[1] absolute bg-hero-pattern text-white-color p-4 w-4 h-4 top-0 right-0 rounded-full'  icon={faPlus}/></button></div>
  </div>
  
  )
}

export default ProductItem