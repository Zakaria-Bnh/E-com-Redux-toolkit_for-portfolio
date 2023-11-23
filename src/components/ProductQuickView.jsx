import { useDispatch, useSelector } from "react-redux";
// actions from slices
import {
  SelectProductData,
  closeModal,
} from "../app/slices/ProductQuickViewSlice";
import { addtocart, selectCartitems } from "../app/slices/CartSlice";
//utilities
import { RatingStars } from "../utilities/index";
// icons
import { AiOutlineClose } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { increaseAmount, decreaseAmount } from "../app/slices/CartSlice";

const ProductQuickView = () => {
  //hooks
  const product = useSelector(SelectProductData);
  const cartItems = useSelector(selectCartitems);
  const dispatch = useDispatch();
  const [itemIsAdded, setitemIsAdded] = useState();
  const [amount, setamount] = useState(1);

  // component's functions
  const handlecloseQuickView = () => {
    dispatch(closeModal());
  };

  const handleAddtocart = (e) => {
    itemIsAdded ?  e.preventDefault() : dispatch(addtocart({ ...product, amount }))

    setitemIsAdded(true);
  };

  const AddedProduct = cartItems.find((item) => {
    return item.id === product.id;
  });

  useEffect(() => {
    setitemIsAdded(AddedProduct);
  }, []);

  const handleIncreaseAmount = (e) => {
    itemIsAdded ?  e.preventDefault() : setamount((previousAmount) => previousAmount + 1);
  };

  const handleDecreaseAmount = (e) => {
    if (amount > 1 && !itemIsAdded) {
      setamount((previousAmount) => previousAmount - 1);
    } else {
      e.preventDefault()
    }
  };

  return (
    <div className="flex justify-center">
      <div
        onClick={() => handlecloseQuickView()}
        className="bg-black opacity-70 fixed h-screen w-screen z-20 top-0"
      ></div>

      <div className="fixed top-12 bottom-12 sm:bottom-auto  flex justify-center items-center z-40">
        <div className="bg-white rounded-sm overflow-hidden  h-full relative w-11/12  max-w-[800px]  flex flex-col sm:flex-row">
          <div className="flex-1 flex justify-center items-center md:items-start">
            <div className=" max-w-[280px] md:max-w-[320px]  p-12 mx-auto">
              <img
                className="max-h-[200px]"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
          <div className=" overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-gray-300 flex-1 p-4 pb-6 bg-lightSecondary">
            <div
              onClick={() => handlecloseQuickView()}
              className="w-full mb-8 cursor-pointer"
            >
              <AiOutlineClose className=" absolute right-3 top-3 ml-auto w-5 h-5 hover:text-red-600 " />
            </div>
            <h1 className="mb-2 font-semibold text-xl">{product.title}</h1>
            <div className="flex items-end gap-4 mb-6">
              <p className="text-gray-500">
                <span className="line-through font-light">{product.price}</span>
                $
              </p>
              <p className="text-xl">{(product.price * 0.7).toFixed(2)}$</p>
            </div>
            <div className="mb-2">
              <RatingStars rate={product.rating.rate} />
            </div>
            <p className="text-gray-500 mb-6 line-clamp-5">
              {product.description}
            </p>
            <div className=" flex flex-col items-start   gap-2 mb-6 rounded-sm">
              <div className= {` ${itemIsAdded ? 'opacity-50' : ''} flex items-center w-fit p-3 gap-3 border rounded-sm border-gray-500 transition-opacity duration-300`}>
                <span className="text-gray-500">quantity</span>
                <div className="flex items-center gap-2">
                  <button onClick={handleIncreaseAmount}>+</button>
                  <span>{amount}</span>
                  <button onClick={handleDecreaseAmount}>-</button>
                </div>
              </div>
              <button
                onClick={ handleAddtocart}
                className={`${
                  itemIsAdded ? "bg-amber-500" : "bg-darkBlue"
                } tracking-wide  w-full p-3 hover:opacity-80 text-white flex-1 transition-colors duration-300`}
              >
                {itemIsAdded ? "ITEM IS ADDED !" : "ADD TO CART"}
              </button>
            </div>
            <button className="flex items-center gap-2">
              <BsFillHeartFill className="bg-transparent border" />
              <span className="text-gray-500 hover:text-gray-800 ">
                Add to wish list
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
