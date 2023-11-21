import {AiOutlineClose} from 'react-icons/ai'


const CartItem = ({ cartItem }) => {


  const { title, image, price, amount } = cartItem;


  return (
    <li className="flex items-center p-4 text-gray-500 border gap-4">

      <img className="max-w-[190px] max-h-[100px]" src={image} alt={title} />


      <div className="flex-1 flex flex-col justify-between gap-4">
<div className="flex justify-between gap-4">

      <h2 className="text-black font-semibold overflow-ellipsis line-clamp-3">
        {title}
      </h2>
      <div className='min-h-5 min-w-5'>

      <AiOutlineClose className=" min-w-full hover:text-red-600 cursor-pointer " />
      </div>

</div>

<div className="flex justify-between items-center">
      <div className=" flex items-center w-fit px-2 self-stretch gap-3 rounded-sm ">
        <span>quantity</span>
        <div className="flex items-center gap-2">
          <button>+</button>
          <span>{amount}</span>
          <button>-</button>
        </div>
      </div>

      <p className="text-lg">{(price * 0.7).toFixed(2)}$</p>
</div>
      
      
      </div>

    </li>
  );
};

export default CartItem;
