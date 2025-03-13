import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaShoppingBag,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { APP_INFO, BANNER } from "../../constants/common.constants";
import Navbar from "./Navbar";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className="w-full">
      {/* Sale Banner */}
      <div className="w-full">
        <img
          src={BANNER.SALE_BANNER}
          alt="Sale Banner"
          className="w-full h-auto"
        />
      </div>

      {/* Main Header */}
      <div className="w-full bg-[#0078E8] shadow-md">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-white"
                onClick={toggleNavbar}
              >
                {isNavbarOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src={APP_INFO.LOGO_MINI}
                  alt={APP_INFO.NAME}
                  className="h-8 md:h-12 w-auto"
                />
              </Link>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="
                    w-full rounded-full shadow-sm bg-white
                    pl-4 pr-15 py-1.25
                    border-1 border-white
                    focus:outline-none
                  "
                />
                <button className="absolute right-0.75 top-1/2 -translate-y-1/2 bg-[#0078E8] rounded-full p-2 hover:cursor-pointer hover:bg-[#0066CC]">
                  <FaSearch className="text-white" />
                </button>
              </div>
            </div>

            {/* Mobile Search Button */}
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <FaSearch className="h-6 w-6" />
            </button>

            {/* Auth & Cart */}
            <div className="flex items-center space-x-4">
              {/* Cart */}
              <Link to="/cart" className="flex items-center">
                <div className="relative p-2 hover:cursor-pointer rounded-full bg-white">
                  <FaShoppingBag className="text-[#0078E8] h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
                <span className="hidden md:block text-white ml-1">
                  Giỏ hàng
                </span>
              </Link>

              {/* Login/Register */}
              <Link to="/login" className="flex items-center">
                <div className="p-2 hover:cursor-pointer rounded-full bg-white">
                  <FaUser className="text-[#0078E8] h-5 w-5" />
                </div>
                <span className="hidden md:block text-white ml-1">
                  Đăng nhập
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {isSearchOpen && (
            <div className="md:hidden mt-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  className="
                    w-full rounded-full shadow-sm bg-white
                    pl-4 pr-15 py-1.25
                    border-1 border-white
                    focus:outline-none"
                />
                <button className="absolute right-0.75 top-1/2 -translate-y-1/2 bg-[#0078E8] rounded-full p-2 hover:cursor-pointer">
                  <FaSearch className="text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:block ${isNavbarOpen ? "block" : "hidden"}`}>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
