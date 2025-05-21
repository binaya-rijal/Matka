"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow-custom-card p-8 text-center">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Looks like you haven't added any products to your cart yet.</p>
            <Link
              href="/products"
              className="px-6 py-3 bg-[#2E7D32] text-white rounded-md hover:bg-[#1B5E20] transition-colors inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-custom-card overflow-hidden">
                <div className="p-6">
                  <div className="flow-root">
                    <ul className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((item) => (
                        <li key={item.id} className="py-6 flex">
                          <div className="relative h-24 w-24 rounded-md overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="96px"
                            />
                          </div>
                          <div className="ml-4 flex-1 flex flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <Link href={`/products/${item.id}`} className="hover:text-[#2E7D32]">
                                    {item.name}
                                  </Link>
                                </h3>
                                <p className="ml-4">Rs. {(item.price * item.quantity).toFixed(2)}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">500g</p>
                            </div>
                            <div className="flex-1 flex items-end justify-between text-sm">
                              <div className="flex items-center border border-gray-300 rounded-md">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  -
                                </button>
                                <span className="px-3 py-1 text-gray-800">{item.quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>

                              <div className="flex">
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(item.id)}
                                  className="font-medium text-[#D32F2F] hover:text-[#B71C1C]"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-custom-card p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                <div className="flow-root">
                  <div className="border-t border-gray-200 py-4">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                      <p>Subtotal</p>
                      <p>Rs. {subtotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                      <p>Shipping</p>
                      <p>{shipping === 0 ? "Free" : `Rs. ${shipping.toFixed(2)}`}</p>
                    </div>
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                      <p>Tax</p>
                      <p>Calculated at checkout</p>
                    </div>
                    <div className="flex justify-between text-lg font-semibold text-gray-900 pt-4 border-t border-gray-200">
                      <p>Total</p>
                      <p>Rs. {total.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-[#2E7D32] text-white py-3 rounded-md shadow-custom-md hover:bg-[#1B5E20] hover:shadow-custom-lg transition-all duration-300 font-medium"
                  >
                    Proceed to Checkout
                  </button>
                </div>
                <div className="mt-6 flex justify-center text-sm text-gray-500">
                  <p>
                    or{" "}
                    <Link href="/products" className="text-[#2E7D32] font-medium hover:underline">
                      Continue Shopping
                    </Link>
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-custom-card p-6 mt-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Have a Coupon?</h2>
                <div className="flex">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md shadow-custom-inner focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                    placeholder="Enter coupon code"
                  />
                  <button
                    type="button"
                    className="bg-[#2E7D32] text-white px-4 py-2 rounded-r-md shadow-custom-sm hover:bg-[#1B5E20] hover:shadow-custom-md transition-all duration-300 font-medium"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
