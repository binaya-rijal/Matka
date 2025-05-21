"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/data/products";
import { useNotification } from "@/context/NotificationContext";
import { useCart } from "@/context/CartContext";
import CartNotification from "./CartNotification";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const router = useRouter();
  const { showNotification } = useNotification();
  const { addToCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);

    // Add to cart using context
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }, quantity);

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
        productName={`${quantity} ${quantity === 1 ? 'item' : 'items'} of ${product.name}`}
        isOpen={showCartNotification}
        onClose={handleCloseNotification}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
      <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-custom-lg">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Product Info */}
      <div>
        <span className="inline-block bg-[#2E7D32] text-white px-3 py-1 text-sm rounded-full mb-4">
          {product.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {product.name}
        </h1>
        <p className="text-2xl text-[#2E7D32] font-bold mb-6">
          Rs. {product.price.toFixed(2)}
        </p>
        <p className="text-gray-700 mb-6">{product.longDescription}</p>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Weight: {product.weight}
          </h3>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Ingredients:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {product.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Benefits:
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            {product.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-4">
            <span className="mr-4 text-gray-700">Quantity:</span>
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-3 py-1 text-gray-800">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleAddToCart}
            disabled={isAddingToCart}
            className={`px-6 py-3 rounded-md transition duration-300 flex items-center justify-center ${
              isAddingToCart
                ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                : "bg-[#FF5722] text-white hover:bg-[#E64A19]"
            }`}
          >
            {isAddingToCart ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Adding to Cart...
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
          <button className="px-6 py-3 border border-[#2E7D32] text-[#2E7D32] rounded-md hover:bg-[#2E7D32] hover:text-white transition duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
