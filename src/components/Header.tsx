"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ title: string; link: string }>>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent | { preventDefault: () => void }) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real application, you would fetch results from an API or search through your data
      // For now, we'll simulate some search results
      const mockResults = [
        { title: "Green Tea", link: "/menu/green-tea" },
        { title: "Black Tea", link: "/menu/black-tea" },
        { title: "Herbal Tea", link: "/menu/herbal-tea" },
        { title: "Tea Benefits", link: "/benefits" },
        { title: "Brewing Guide", link: "/about/brewing-guide" }
      ].filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(mockResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-50 flex items-start justify-center pt-20">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl p-6 mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#333333]">Search Matka Tea</h3>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                  setSearchResults([]);
                }}
                className="text-gray-500 hover:text-[#2E7D32] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for teas, products, recipes..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32] focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-[#2E7D32] text-white px-4 py-3 rounded-r-md hover:bg-[#1B5E20] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </form>

            {searchResults.length > 0 ? (
              <div>
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Search Results</h4>
                <ul className="divide-y divide-gray-200">
                  {searchResults.map((result, index) => (
                    <li key={index} className="py-3">
                      <Link
                        href={result.link}
                        className="block hover:bg-gray-50 transition-colors p-2 rounded"
                        onClick={() => setIsSearchOpen(false)}
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="text-[#333333] font-medium">{result.title}</h5>
                            <p className="text-sm text-gray-500">Click to view</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : searchQuery.trim() !== "" && (
              <div className="text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-500">No results found for "{searchQuery}"</p>
                <p className="text-sm text-gray-400 mt-2">Try different keywords or browse our categories</p>
              </div>
            )}

            {searchQuery.trim() === "" && (
              <div className="mt-4">
                <h4 className="text-sm font-semibold text-gray-500 mb-3">Popular Searches</h4>
                <div className="flex flex-wrap gap-2">
                  {["Green Tea", "Black Tea", "Matka Tea", "Tea Benefits", "Brewing Guide"].map((term, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSearchQuery(term);
                        handleSearch({ preventDefault: () => {} });
                      }}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <header
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white text-[#333333] shadow-md py-2"
            : "bg-[#2E7D32] text-white py-3"
        }`}
      >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center group">
              <div className="w-10 h-10 relative mr-2 overflow-hidden">
                <div className="absolute inset-0 bg-[#2E7D32] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 border-2 border-white">
                  <span className="text-white font-bold text-lg">RM</span>
                </div>
              </div>
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                scrolled ? "text-[#333333]" : "text-white"
              } group-hover:text-[#2E7D32]`}>
                Royal Matka Tea
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { name: "Home", link: "/" },
              { name: "Products", link: "/products" },
              { name: "About Us", link: "/about" },
              { name: "Contact Us", link: "/contact" }
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.link}
                className={`relative group font-medium transition-colors duration-300 ${
                  scrolled ? "text-[#333333]" : "text-white"
                } hover:text-[#4CAF50]`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10 uppercase text-sm font-semibold tracking-wider">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4CAF50] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Icons: Search, Account, Cart */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-[#333333]" : "text-white"
              } hover:text-[#4CAF50]`}
              aria-label="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            <Link
              href="/account"
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-[#333333]" : "text-white"
              } hover:text-[#4CAF50]`}
              aria-label="Account"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>

            <Link
              href="/cart"
              className={`focus:outline-none transition-colors duration-300 relative ${
                scrolled ? "text-[#333333]" : "text-white"
              } hover:text-[#4CAF50]`}
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`focus:outline-none transition-colors duration-300 ${
                scrolled ? "text-[#333333]" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            {[
              { name: "Home", link: "/" },
              { name: "Products", link: "/products" },
              { name: "About Us", link: "/about" },
              { name: "Contact Us", link: "/contact" },
              { name: "Account", link: "/account", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
              { name: "Shopping Cart", link: "/cart", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.link}
                className={`transform transition-all duration-300 ${
                  scrolled ? "text-[#333333]" : "text-white"
                } hover:text-[#4CAF50] hover:translate-x-2 uppercase text-sm font-semibold tracking-wider`}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  transitionDelay: `${index * 0.05}s`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateX(0)" : "translateX(-20px)"
                }}
              >
                {item.icon ? (
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                    {item.name}
                  </div>
                ) : (
                  item.name
                )}
              </Link>
            ))}
            <div className="pt-2 border-t border-white/20">
              <button
                onClick={() => {
                  setIsSearchOpen(true);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-2 ${
                  scrolled ? "text-[#333333]" : "text-white"
                } hover:text-[#4CAF50] transition-colors duration-300 uppercase text-sm font-semibold tracking-wider`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>Search</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
