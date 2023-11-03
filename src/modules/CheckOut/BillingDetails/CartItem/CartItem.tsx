import { useEffect, useState } from "react";
import { formatCurrency } from "../../../../utilities/formatCurrency";
import { Product } from "../../../../types/types";
import axios from "axios";
type CartItemProps = {
  id:number,
  quantity:number
}
const CartItem = ({id,quantity} : CartItemProps) => {
  const [products, setProducts] = useState<Product[]| null>();

  useEffect(() => {
    const url  = 'https://burgos-be.onrender.com/products'
    axios.get(url).then((res) => setProducts(res.data))


  },[id]);
  const item = products?.find(i => i.id === id);
  if(item ==null) return null;
  return (
    <>
      <tr className="cart-item">
            <td className="product-name align-middle leading-[1.5em] px-3 py-[9px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">{item.name} x{quantity}</td>
            <td className="product-total align-middle leading-[1.5em] px-3 py-[9px] border-t-[rgba(0,0,0,0.1)] border-t border-solid">{formatCurrency(item.price)}</td>
          </tr>
    </>
  )
}

export default CartItem