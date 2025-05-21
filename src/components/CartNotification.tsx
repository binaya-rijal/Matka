"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface CartNotificationProps {
  productName: string;
  isOpen: boolean;
  onClose: () => void;
}

const CartNotification = ({ productName, isOpen, onClose }: CartNotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    // Add a small delay before calling onClose to allow the animation to complete
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleViewCart = () => {
    router.push('/cart');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-4"
        }`}
      >
        <div className="bg-white rounded-lg shadow-custom-elevated overflow-hidden max-w-md w-full">
          <div className="bg-[#2E7D32] px-4 py-3 text-white flex items-center">
            <div className="mr-3">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Added to Cart</h3>
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4">{productName} has been added to your cart!</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={handleViewCart}
                className="px-4 py-2 bg-[#FF5722] text-white rounded shadow-custom-sm hover:bg-[#E64A19] hover:shadow-custom-md transition-all duration-300 cursor-pointer"
              >
                View Cart
              </button>
              <button
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 shadow-custom-sm hover:bg-gray-100 hover:shadow-custom-md transition-all duration-300 cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartNotification;
