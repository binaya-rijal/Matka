"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AccountPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would connect to a backend for authentication
    // For demo purposes, we'll just simulate a successful login/registration
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setName("");
  };

  if (isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800">My Account</h1>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Logout
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 bg-[#2E7D32] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                        {name ? name.charAt(0).toUpperCase() : "U"}
                      </div>
                      <h2 className="text-xl font-semibold">{name || "User"}</h2>
                      <p className="text-gray-500 text-sm mt-1">{email}</p>
                    </div>

                    <div className="mt-6">
                      <h3 className="font-medium text-gray-700 mb-3">Account Navigation</h3>
                      <ul className="space-y-2">
                        {["Orders", "Addresses", "Payment Methods", "Account Details", "Wishlist"].map((item) => (
                          <li key={item}>
                            <button className="w-full text-left py-2 px-3 rounded-md hover:bg-gray-200 transition-colors">
                              {item}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="bg-gray-100 p-6 rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
                    <div className="bg-white rounded-md p-4 mb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #RT78901</p>
                          <p className="text-sm text-gray-500">April 15, 2024</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Delivered</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm">2 × Royal Matka Premium, 1 × Royal Matka Gold</p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="font-medium">Rs. 1,499</p>
                          <button className="text-sm text-[#2E7D32] hover:underline">View Order</button>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="font-medium">Order #RT78890</p>
                          <p className="text-sm text-gray-500">March 28, 2024</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Delivered</span>
                      </div>
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-sm">3 × Royal Matka Masala, 2 × Royal Matka Economy</p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="font-medium">Rs. 1,299</p>
                          <button className="text-sm text-[#2E7D32] hover:underline">View Order</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Account Details</h2>
                    <form>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                          type="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-[#2E7D32] text-white rounded-md hover:bg-[#1B5E20] transition-colors"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-[#2E7D32] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">RM</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
              {isLogin ? "Login to Your Account" : "Create an Account"}
            </h1>

            <div className="flex border-b border-gray-200 mb-6">
              <button
                className={`flex-1 py-2 text-center font-medium ${
                  isLogin ? "text-[#2E7D32] border-b-2 border-[#2E7D32]" : "text-gray-500"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 text-center font-medium ${
                  !isLogin ? "text-[#2E7D32] border-b-2 border-[#2E7D32]" : "text-gray-500"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                  />
                </div>
              )}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {isLogin && (
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-4 w-4 text-[#2E7D32] focus:ring-[#2E7D32] border-gray-300 rounded"
                    />
                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-[#2E7D32] hover:underline">
                    Forgot password?
                  </a>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-[#2E7D32] text-white py-3 rounded-md hover:bg-[#1B5E20] transition-colors font-medium"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button
                className="text-[#2E7D32] font-medium hover:underline"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
