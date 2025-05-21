"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface NotificationProps {
  title: string;
  message: string;
  type: "success" | "error" | "info";
  isOpen: boolean;
  onClose: () => void;
  actionText?: string;
  onAction?: () => void;
}

const Notification = ({
  title,
  message,
  type,
  isOpen,
  onClose,
  actionText,
  onAction,
}: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Auto close after 5 seconds if no action is required
      if (!actionText) {
        const timer = setTimeout(() => {
          handleClose();
        }, 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [isOpen, actionText]);

  const handleClose = () => {
    setIsVisible(false);
    // Add a small delay before calling onClose to allow the animation to complete
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleAction = () => {
    if (onAction) {
      onAction();
    }
    handleClose();
  };

  // Define background color based on notification type
  const getBgColor = () => {
    switch (type) {
      case "success":
        return "bg-[#2E7D32]";
      case "error":
        return "bg-[#D32F2F]";
      case "info":
        return "bg-[#FF5722]";
      default:
        return "bg-[#2E7D32]";
    }
  };

  // Define icon based on notification type
  const getIcon = () => {
    switch (type) {
      case "success":
        return (
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
        );
      case "error":
        return (
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
        );
      case "info":
        return (
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
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-80 transition-opacity duration-300">
      <div
        className={`transform transition-all duration-300 ease-in-out ${
          isVisible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 translate-y-4"
        }`}
      >
        <div className="bg-white rounded-lg shadow-custom-elevated overflow-hidden max-w-md w-full mx-4">
          <div className={`${getBgColor()} px-4 py-3 text-white flex items-center`}>
            <div className="mr-3">{getIcon()}</div>
            <h3 className="font-semibold text-lg">{title}</h3>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-6">{message}</p>
            <div className="flex justify-end space-x-3">
              {actionText && (
                <button
                  onClick={handleAction}
                  className="px-4 py-2 bg-[#FF5722] text-white rounded shadow-custom-sm hover:bg-[#E64A19] hover:shadow-custom-md transition-all duration-300 cursor-pointer"
                >
                  {actionText}
                </button>
              )}
              <button
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 rounded text-gray-700 shadow-custom-sm hover:bg-gray-100 hover:shadow-custom-md transition-all duration-300 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
