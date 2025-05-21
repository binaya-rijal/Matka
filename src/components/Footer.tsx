"use client";

import Link from "next/link";
import { useState } from "react";
import { useNotification } from "@/context/NotificationContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { showNotification } = useNotification();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed with email:", email);

    // Show success notification
    showNotification(
      "Newsletter Subscription",
      "Thank you for subscribing to our newsletter!",
      "success"
    );

    setEmail("");
    // In a real app, you would send this to your backend
  };

  return (
    <footer className="bg-[#2E7D32] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-3">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#2E7D32] border-2 border-white rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">RM</span>
              </div>
              <h3 className="text-2xl font-bold">Royal Matka Tea</h3>
            </div>
            <p className="mb-6 text-gray-100">
              Experience the authentic taste of premium Nepali CTC tea from Panchamukhi Chiya Udhyog.
              Serving Nepali households with quality tea for over 25 years.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z", label: "Facebook", color: "#1877F2" },
                { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z", label: "Instagram", color: "#E4405F" },
                { icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z", label: "Twitter", color: "#1DA1F2" }
              ].map((social, index) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-md"
                  aria-label={social.label}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill={social.color}
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Main Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-wider">
              Our Products
            </h3>
            <ul className="space-y-3">
              {[
                "Royal Matka Premium",
                "Royal Matka Gold",
                "Royal Matka Masala",
                "Royal Matka Economy",
                "Royal Matka Green Tea"
              ].map((item) => (
                <li key={item} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href={`/products/${item.toLowerCase().replace(/\s+/g, '-').replace(/royal-/g, '')}`}
                    className="hover:text-[#4CAF50] transition duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-wider">
              About Us
            </h3>
            <ul className="space-y-3">
              {[
                "Our Story",
                "Our Process",
                "Tea Benefits",
                "Brewing Guide",
                "Nepali Tea History"
              ].map((item) => (
                <li key={item} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href={`/about/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[#4CAF50] transition duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tertiary Links */}
          <div className="md:col-span-2">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-wider">
              Help Center
            </h3>
            <ul className="space-y-3">
              {[
                "FAQs",
                "Contact Us",
                "Privacy Policy",
                "Terms of Service",
                "Shipping Info"
              ].map((item) => (
                <li key={item} className="transform hover:translate-x-2 transition-transform duration-300">
                  <Link
                    href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-[#4CAF50] transition duration-300 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-bold mb-6 uppercase tracking-wider">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm text-gray-100">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <div className="flex shadow-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="px-4 py-3 bg-white text-[#333333] rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#4CAF50] w-full"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-[#4CAF50] text-white rounded-r-md hover:bg-[#2E7D32] transition duration-300 font-medium"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="mt-6">
              <p className="text-sm">
                <strong className="text-white">Contact Us:</strong><br />
                <span className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Damak Municipality, Ward No. 12, Jhapa, Nepal
                </span>
                <span className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@royalmatkatea.com
                </span>
                <span className="flex items-center mt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +977 9801234567
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-200 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Panchamukhi Chiya Udhyog Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/about" className="text-sm text-gray-200 hover:text-white">About Us</Link>
              <Link href="/privacy-policy" className="text-sm text-gray-200 hover:text-white">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-sm text-gray-200 hover:text-white">Terms of Service</Link>
              <Link href="/sitemap" className="text-sm text-gray-200 hover:text-white">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
