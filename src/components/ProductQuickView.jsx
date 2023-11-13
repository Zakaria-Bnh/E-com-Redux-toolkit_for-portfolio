import { useDispatch, useSelector } from "react-redux";
import {
  SelectProductData,
  closeModal,
} from "../app/slices/ProductQuickViewSlice";
import { AiOutlineClose } from "react-icons/ai";

const ProductQuickView = () => {
  const product = useSelector(SelectProductData);
  const dispatch = useDispatch();

  const handlecloseQuickView = () => {
    dispatch(closeModal());
  };

  return (
    <div>
      <div className="bg-black opacity-70 fixed h-screen w-screen z-20 top-0"></div>

      <div className="fixed inset-0 flex justify-center items-center z-30">
        <div className="bg-white w-4/5 max-w-[700px] flex flex-col sm:flex-row">
          <div className="flex-1">
            <div className="p-12">
              <img
                className="w-[250px]"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
          <div className="flex-1 bg-lightSecondary">
            <div className="w-full p-3">
              <AiOutlineClose
                onClick={() => handlecloseQuickView()}
                className="ml-auto w-5 h-5 hover:text-red-600 cursor-pointer"
              />
            </div>
            <h1 className="mb-4 font-semibold text-xl">{product.title}</h1>
            <div className="flex justify-around mb-3">
              <p className="text-gray-500">
                <span className="line-through">{product.price}</span>$
              </p>
              <p>{(product.price * 0.7).toFixed(2)}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
