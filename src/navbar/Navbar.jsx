import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Control body overflow when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  // Common styles
  const inputStyles = "w-full text-lg rounded-md px-4 py-2 text-gray-700";
  const searchButtonStyles =
    "absolute right-1 top-1 text-2xl text-white bg-blue-600 p-2 rounded-md";

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        {/* Navbar */}
        <nav className="w-full flex items-center justify-between px-6 py-4 shadow-sm bg-white relative">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-xl font-bold">
            <Link to="/">
              <img src={logo} className="w-40" alt="" />
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Nav Links */}
            <div className="hidden md:flex font-semibold space-x-6 text-lg pr-4 text-gray-700 gap-5">
              <a href="#" className="hover:text-blue-600">
                Careers & Skills Passport
              </a>
              <a href="#" className="hover:text-blue-600">
                Courses
              </a>
              <a href="#" className="hover:text-blue-600">
                E-Services
              </a>
              <a href="#" className="hover:text-blue-600">
                Resources
              </a>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </div>

            {/* Right Side - Login & Search */}
            <FiSearch className="text-xl cursor-pointer" />

            {/* Hamburger Icon (Mobile) */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>
        </nav>

        {/* Underline below Navbar */}
        <div className="border-b border-gray-300"></div>

        {/* Breadcrumb Navigation */}
        <div className="px-6 py-1 text-xs text-gray-600 shadow-sm">
          <span className="hover:underline text-gray-800">Home</span>
          <span className="mx-2">{">"}</span>
          <span className="text-gray-400 font-medium">Verify e-Cert</span>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col p-6 transition-transform duration-300 overflow-y-auto ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        {/* Close Button */}
        <button
          className="self-end text-3xl mb-4"
          onClick={() => setMenuOpen(false)}
        >
          <AiOutlineClose />
        </button>

        {/* Mobile Menu Logo */}
        <div className="flex justify-between items-center space-x-4 mb-5">
          <div className="flex items-center space-x-2 text-xl font-bold">
            <img src={logo} alt="" />
          </div>
        </div>

        {/* Search Box */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder='Include " " for better search results'
            className={inputStyles}
          />
          <button className={searchButtonStyles}>
            <BsSearch />
          </button>
        </div>

        {/* Popular Searches */}
        <div className="w-full mt-6">
          <h3 className="font-semibold text-gray-700 text-sm">
            Popular Searches
          </h3>
          <div className="flex flex-col bg-gray-100 p-5 text-gray-400">
            <a href="#" className="flex items-center gap-2">
              <BsSearch /> SkillsFuture Credit (Mid-Career)
            </a>
            <a href="#" className="flex items-center gap-2">
              <BsSearch /> e-learning
            </a>
            <a href="#" className="flex items-center gap-2">
              <BsSearch /> Arts and Entertainment
            </a>
          </div>
        </div>

        {/* Mobile Menu Links */}
        <div className="relative mt-6">
          <div className="space-y-2 text-gray-700">
            <div className="border-b py-2">Careers & Skills Passport</div>
            <div className="border-b py-2 flex justify-between items-center">
              Courses{" "}
              <span className="text-gray-400 text-xl border-l-2 pl-4">⌄</span>
            </div>
            <div className="border-b py-2 flex justify-between items-center">
              E-Services{" "}
              <span className="text-gray-400 text-xl border-l-2 pl-4">⌄</span>
            </div>
            <div className="border-b py-2 flex justify-between items-center">
              Resources{" "}
              <span className="text-gray-400 text-xl border-l-2 pl-4">⌄</span>
            </div>
            <div className="border-b py-2">About Us</div>
          </div>
        </div>
      </div>

      {/* Smiley Emoji Button */}
      <div className="fixed z-50 bottom-4 left-4 bg-yellow-500 border-8 border-black text-white text-2xl p-3 rounded-full shadow-lg cursor-pointer ">
        😊
      </div>
    </>
  );
};

export default Navbar;
