import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-[#213425] text-white py-6 px-8 md:px-32 shadow-md">
      <Link to="/about">
        <img
          className="h-14 w-14 rounded-lg bg-white hover:scale-110 transition-transform duration-300"
          src="./logo4.png"
          alt="logo"
        />
      </Link>

      <ul className="hidden xl:flex items-center gap-12 font-semibold text-lg">
        <li className="hover:underline">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link to="/">Products</Link>
        </li>
        <li className="hover:underline">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="hover:underline">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:underline">
          <Link to="/admin">Admin</Link>
        </li>
      </ul>

      {/* Burger Icon */}
      <div
        className="xl:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <img src="./Menu.svg" alt="menu" className="w-10 h-10" />
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-10 top-full left-0 w-full bg-[#213425] flex flex-col items-center gap-6 font-semibold text-lg py-6 transform transition-all duration-300 xl:hidden ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link to="/about" onClick={() => setIsMenuOpen(false)}>
          About
        </Link>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Products
        </Link>
        <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
          Cart
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          Contact
        </Link>
        <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
          Admin
        </Link>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  color: PropTypes.string,
  textColor: PropTypes.string,
};

export default Nav;
