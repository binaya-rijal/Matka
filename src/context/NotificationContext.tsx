"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import Notification from "@/components/Notification";

type NotificationType = "success" | "error" | "info";

interface NotificationContextProps {
  showNotification: (
    title: string,
    message: string,
    type: NotificationType,
    actionText?: string,
    onAction?: () => void
  ) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};

interface NotificationProviderProps {
  children: ReactNode;
}

export const NotificationProvider = ({
  children,
}: NotificationProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notificationData, setNotificationData] = useState({
    title: "",
    message: "",
    type: "success" as NotificationType,
    actionText: undefined as string | undefined,
    onAction: undefined as (() => void) | undefined,
  });

  const showNotification = (
    title: string,
    message: string,
    type: NotificationType,
    actionText?: string,
    onAction?: () => void
  ) => {
    setNotificationData({
      title,
      message,
      type,
      actionText,
      onAction,
    });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Notification
        title={notificationData.title}
        message={notificationData.message}
        type={notificationData.type}
        isOpen={isOpen}
        onClose={handleClose}
        actionText={notificationData.actionText}
        onAction={notificationData.onAction}
      />
    </NotificationContext.Provider>
  );
};
