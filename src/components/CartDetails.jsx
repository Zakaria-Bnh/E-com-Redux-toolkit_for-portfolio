const CartDetails = ({total}) => {
  total = total.toFixed(2)
  return (
    <div className="py-6 px-4 sticky top-32 bg-secondary rounded-sm">
      <h3 className="text-2xl sm:text-2xl tracking-widest font-semibold mb-10">CART TOTALS</h3>


      <div className="grid grid-cols-301 gap-3 items-center mb-4 ">
        <h3 className="font-semibold text-sm ">SUB-TOTAL</h3>
        <span className="text-lg text-gray-500">{total}$</span>
      </div>


      <div className="grid grid-cols-301 gap-3 mb-12">
        <h3 className="font-semibold text-sm">SHIPPING</h3>

        <form className="flex flex-col gap-3 first-letter:">
          <div className="flex gap-2 text-sm lg:text-base ">
            <input className="cursor-pointer" type="radio" value="express" name="shipping" id="express" />
            <label className="cursor-pointer text-gray-500" htmlFor="express">Express Shipping</label>
          </div>
          <div className="flex gap-2 text-sm lg:text-base cursor-pointer">
            <input className="cursor-pointer" type="radio" value="standard" name="shipping" id="standard" />
            <label className="cursor-pointer text-gray-500" htmlFor="standard">Standard Shipping</label>
          </div>
          <div className="flex gap-2 text-sm lg:text-base cursor-pointer">
            <input className="cursor-pointer" type="radio" value="flat-rate" name="shipping" id="flat-rate" />
            <label className="cursor-pointer text-gray-500" htmlFor="flat-rate">Flat-rate: 10$</label>
          </div>
        </form>
      </div>


      <div className="w-full h-[2px] bg-gray-300 mb-4"></div>
      
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">TOTAL</h3>
        <span className="text-lg">{total}$</span>
      </div>
    </div>
  );
};

export default CartDetails;
