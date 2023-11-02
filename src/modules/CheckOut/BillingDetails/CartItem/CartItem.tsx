import burgersData from "../../../../data/data.json"
import { formatCurrency } from "../../../../utilities/formatCurrency";
type CartItemProps = {
  id:number,
  quantity:number
}
const CartItem = ({id,quantity} : CartItemProps) => {
  const item = burgersData.find(i => i.id === id);
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