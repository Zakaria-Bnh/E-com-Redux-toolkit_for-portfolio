import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts, SelecteProducts } from "../app/slices/ProductsSlices";
import { ProductQuickView, ProductCard } from "./index";
import { SelectIsShowModal } from "../app/slices/ProductQuickViewSlice";

const Products = () => {
  const products = useSelector(SelecteProducts);
  const showModal = useSelector(SelectIsShowModal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchProducts());
    console.log(products, "heelo from edddect");
  }, []);

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
