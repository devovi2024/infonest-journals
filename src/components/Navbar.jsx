import { useState, useEffect, useRef } from "react";
import { FaBars, FaTwitter, FaFacebookF, FaYoutube, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ categories, profile, date }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full shadow-md">
      {/* Topbar */}
      <div className="bg-yellow-500 py-2 text-sm text-white">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="font-medium">Breaking: Welcome to InfoNest</span>
          <div className="hidden md:flex items-center gap-4">
            <span>{date}</span>
            <div className="flex gap-3 text-lg">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/assets/images/logo.png" alt="Logo" className="h-10" />
            <span className="text-2xl font-bold">InfoNest</span>
          </div>

          {/* Center Text */}
          <div className="hidden lg:flex flex-col items-center">
            <h1 className="text-lg font-semibold">Explore InfoNest</h1>
            <p className="text-xs">Discover the latest updates</p>
          </div>

          {/* Right-side Menu */}
          <div className="flex items-center gap-4">
            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
              <Link to="/pages" className="hover:text-yellow-300 transition">Pages</Link>
              <Link to="/posts" className="hover:text-yellow-300 transition">Posts</Link>

              {/* Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="hover:text-yellow-300 transition"
                >
                  Categories ▼
                </button>
                {dropdownOpen && (
                  <div className="absolute z-10 top-full mt-2 bg-white text-gray-800 rounded shadow-md w-44 animate-fadeIn">
                    {categories?.length ? (
                      categories.map((cat, i) => (
                        <Link
                          key={i}
                          to={`/category/${cat.slug}`}
                          className="block px-4 py-2 hover:bg-green-600 hover:text-white transition"
                        >
                          {cat.name}
                        </Link>
                      ))
                    ) : (
                      <div className="px-4 py-2">No categories available</div>
                    )}
                  </div>
                )}
              </div>

              {/* Profile */}
              {profile?.avatar ? (
                <div className="flex items-center gap-2">
                  <img src={profile.avatar} alt="Profile" className="h-8 w-8 rounded-full object-cover" />
                  <span>{profile.name}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 bg-gray-300 rounded-full" />
                  <span>User</span>
                </div>
              )}
            </div>

            {/* Icons */}
            <button className="text-white text-lg"><FaSearch /></button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-white text-xl">
              <FaBars />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 text-white px-6 py-4 space-y-4 animate-slideDown">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/pages" className="block hover:text-yellow-300">Pages</Link>
          <Link to="/posts" className="block hover:text-yellow-300">Posts</Link>

          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="block w-full text-left hover:text-yellow-300">
              Categories ▼
            </button>
            {dropdownOpen && (
              <div className="mt-2 bg-white text-gray-800 rounded shadow-md">
                {categories?.length ? (
                  categories.map((cat, i) => (
                    <Link
                      key={i}
                      to={`/category/${cat.slug}`}
                      className="block px-4 py-2 hover:bg-green-600 hover:text-white transition"
                    >
                      {cat.name}
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2">No categories available</div>
                )}
              </div>
            )}
          </div>

          {/* Profile */}
          {profile?.avatar ? (
            <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
              <img src={profile.avatar} alt="Profile" className="h-8 w-8 rounded-full object-cover" />
              <span>{profile.name}</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 pt-4 border-t border-gray-700">
              <div className="h-8 w-8 bg-gray-300 rounded-full" />
              <span>User</span>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
