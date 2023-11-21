import { useSelector } from "react-redux";
import { selectCartitems, selectTotalPrice } from "../app/slices/CartSlice";
import {CartDetails, CartItem} from "./index";

const Cart = () => {
  const Cartitems = useSelector(selectCartitems);
  const Total = useSelector(selectTotalPrice)

  return (
    <div className="container | pt-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">SHOPPING CART</h1>
      <div className="grid md:grid-cols-140  gap-16 sm:gap-6">
        <ul className=" flex flex-col gap-4">
          {Cartitems.map((item, index) => (
              <CartItem key={index}  cartItem={item} /> 
          ))}
        </ul>
        <div className="">
          <CartDetails total={Total} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
