"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useNotification } from "@/context/NotificationContext";
import CartNotification from "./CartNotification";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ id, name, description, price, image }: ProductCardProps) => {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const router = useRouter();
  const { addToCart } = useCart();
  const { showNotification } = useNotification();

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    // Add to cart using context
    addToCart({ id, name, price, image }, 1);

    // Simulate delay for better UX
    setTimeout(() => {
      setIsAddingToCart(false);

      // Show custom cart notification
      setShowCartNotification(true);
    }, 500);
  };

  const handleCloseNotification = () => {
    setShowCartNotification(false);
  };

  return (
    <>
      {/* Cart Notification */}
      <CartNotification
        productName={name}
        isOpen={showCartNotification}
        onClose={handleCloseNotification}
      />

      <div className="bg-white rounded-lg shadow-custom-card overflow-hidden transition-transform duration-300 hover:shadow-custom-elevated hover:-translate-y-1">
        <div className="relative h-64 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center mb-4">
            <span className="text-[#2E7D32] font-bold">Rs. {price.toFixed(2)}</span>
            <Link
              href={`/products/${id}`}
              className="px-4 py-2 bg-[#2E7D32] text-white rounded hover:bg-[#1B5E20] transition duration-300"
            >
              View Details
            </Link>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`w-full py-2 rounded transition duration-300 flex items-center justify-center ${
              isAddingToCart
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-[#FF5722] text-white hover:bg-[#E64A19]"
            }`}
          >
            {isAddingToCart ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
