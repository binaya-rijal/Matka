"use client";

import { useState } from "react";
import { useNotification } from "@/context/NotificationContext";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real application, you would send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success notification
      showNotification(
        "Message Sent",
        "Thank you for your message! We will get back to you soon.",
        "success"
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      // Show error notification
      showNotification(
        "Error",
        "There was an error submitting your message. Please try again.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      <div>
        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-custom-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a] focus:shadow-custom-md"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-custom-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a] focus:shadow-custom-md"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-custom-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a] focus:shadow-custom-md"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-custom-sm focus:outline-none focus:ring-2 focus:ring-[#1a472a] focus:shadow-custom-md"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-[#1a472a] text-white rounded-md shadow-custom-md hover:bg-[#143d23] hover:shadow-custom-lg transition duration-300 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
