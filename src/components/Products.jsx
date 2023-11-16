import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts, SelecteProducts } from "../app/slices/ProductsSlices";
import { ProductCard, ProductQuickView } from "./index";
import { SelectIsShowModal } from "../app/slices/ProductQuickViewSlice";

const Products = () => {
  const products = useSelector(SelecteProducts);
  const dispatch = useDispatch();
  const showModal = useSelector(SelectIsShowModal);

  useEffect(() => {
    dispatch(FetchProducts());
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <div>
      <div className=" container | bg-lightSecondary grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
        {products.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
      {showModal && <ProductQuickView />}
    </div>
  );
};

export default Products;
