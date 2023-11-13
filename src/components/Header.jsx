import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";

const Header = () => {
  const [ismenu, setismenu] = useState(false);

  useEffect(() => {
    const handleMenuOnScroll = () => {
      window.scrollY > 70 ? setismenu(true) : setismenu(false);
    };

    handleMenuOnScroll();
    window.addEventListener("scroll", handleMenuOnScroll);

    return () => {
      removeEventListener("scroll", handleMenuOnScroll);
    };
  });

  return (
    <header className={`${ismenu ? ' shadow-primary' : ''} fixed bg-secondary w-full  py-4 sm:py-6 transition-all duration-150 z-10`}>
      <div className="container |  flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="rounded text-2xl font-bold tracking-tighter">
          WooShop
        </Link>
        {/* Navigation Links (Centered) */}
        <nav
          className={` ${
            ismenu ? "hidden tablet:block" : ""
          } absolute sm:relative sm:top-0 bg-white sm:bg-transparent top-full w-full left-0 shadow-primary tablet:shadow-none`}
        >
          <ul className="flex justify-center space-x-3 sm:space-x-4 text-gray-500 w-full text-sm py-3">
            <li className="hover:text-gray-700 hover:font-semibold">
              <Link to="/" className="text-orange">
                HOME
              </Link>
            </li>
            <li className="hover:text-gray-700 hover:font-semibold">
              <Link to="/products">SHOP ALL</Link>
            </li>
            <li className="hover:text-gray-700 hover:font-semibold">
              <Link to="/notfoundpage">BLOG</Link>
            </li>
            <li className="hover:text-gray-700 hover:font-semibold">
              <Link to="/notfoundpage">CONTACT</Link>
            </li>
            <li className="hover:text-gray-700 hover:font-semibold">
              <Link to="/notfoundpage">ABOUT</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-2">
          <Link to="/cart" className="flex gap-1 items-center">
            <AiOutlineShoppingCart /> <span>(0)</span>
          </Link>

          <Link to="/favorites" className="flex gap-1 items-center">
            <FaRegHeart /> <span>(0)</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
