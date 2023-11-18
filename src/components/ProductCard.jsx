import { BsFillHeartFill } from "react-icons/bs";
import { IoHeartDislikeSharp } from "react-icons/io5"; // for not heart
import { useDispatch } from "react-redux";
import { ViewProduct, openModal } from "../app/slices/ProductQuickViewSlice";



const ProductCard = ({ data }) => {
  const dispatch = useDispatch();


  const handlequickview = () => {
    dispatch(openModal());
    dispatch(ViewProduct(data));
  };

  return (
    <div>
      <div className="h-[350px] bg-white rounded-md mx-auto w-full max-w-sm hover:shadow-md  flex flex-col group ">
        <div onClick={() => handlequickview()} className="w-[200px] min-h-[180px] py-4 aspect-square mx-auto h-full flex flex-col justify-center items-center cursor-pointer">
          <img
            className="max-h-full group-hover:scale-105 transition-all duration-400"
            src={data.image}
            alt={data.title}
          />
        </div>
        <div className="p-4 flex flex-col h-full">
          <h2 className=" mb-4 font-semibold text-center overflow-ellipsis line-clamp-2">
            {data.title}
          </h2>
          <div className="flex-1 flex flex-col justify-end">
            <div className="flex items-end justify-around mb-3">
              <p className="text-gray-500">
                <span className="line-through font-light">{data.price}</span>$
              </p>
              <p className="text-xl">{(data.price * 0.7).toFixed(2)}$</p>
            </div>
            <div className="flex sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={() => handlequickview()}
                className="mx-auto w-full bg-darkBlue hover:opacity-80 py-2 text-white"
              >
                Quick view
              </button>
              <div className="bg-gray-700 hover:bg-gray-500 focus:bg-darkBlue cursor-pointer p-2 ">
                <BsFillHeartFill className="w-full text-white h-full " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
