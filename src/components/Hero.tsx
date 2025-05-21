"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Royal Matka Premium",
      description: "Experience the authentic taste of premium Nepali CTC tea with rich flavor, deep color, and aromatic experience.",
      image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?q=80&w=2070&auto=format&fit=crop",
      buttonText: "Shop Now",
      buttonLink: "/products"
    },
    {
      title: "25 Years of Excellence",
      description: "Trusted by Nepali households for over 25 years, Royal Matka Tea delivers consistent quality in every cup.",
      image: "https://images.unsplash.com/photo-1546427660-eb346c344ba5?q=80&w=2070&auto=format&fit=crop",
      buttonText: "Our Story",
      buttonLink: "/about"
    },
    {
      title: "CTC Tea Specialists",
      description: "Panchamukhi Chiya Udhyog is Nepal's leading producer of high-quality CTC tea, perfect for traditional milk tea.",
      image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000&auto=format&fit=crop",
      buttonText: "Shop Now",
      buttonLink: "/products"
    },
    {
      title: "Variety of Blends",
      description: "From our flagship Premium to Gold, Masala, and Green Tea varieties, discover the perfect Royal Matka Tea for you.",
      image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop",
      buttonText: "Explore Products",
      buttonLink: "/products"
    }
  ];

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);

    // Auto-rotate carousel
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative bg-white text-[#333333] min-h-screen flex flex-col items-center pt-16">
      {/* Carousel */}
      <div className="w-full h-[70vh] relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image with 3D effect */}
            <div className="absolute inset-0 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                 style={{ backgroundImage: `url('${slide.image}')` }}>
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                  <div className="inline-block bg-[#2E7D32] px-4 py-1 rounded-full text-sm font-medium mb-6 text-white">
                    Premium Nepali CTC Tea Since 1998
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-[#333333]">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 text-[#555555] max-w-xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href={slide.buttonLink}
                      className="px-8 py-4 bg-[#2E7D32] text-white rounded-md hover:bg-[#1B5E20] transition-all duration-300 text-center font-medium hover:shadow-xl hover:-translate-y-1"
                    >
                      {slide.buttonText}
                    </Link>
                    <Link
                      href="/about"
                      className="px-8 py-4 bg-transparent border-2 border-[#2E7D32] text-[#2E7D32] rounded-md hover:bg-[#2E7D32] hover:text-white transition-all duration-300 text-center font-medium"
                    >
                      Our Story
                    </Link>
                  </div>
                </div>

                {/* Image/Visual Element with 3D effect */}
                <div className="hidden lg:block relative">
                  <div className="relative h-[400px] w-[400px] mx-auto transform hover:rotate-2 transition-transform duration-500">
                    <div className="absolute inset-0 bg-[#2E7D32]/10 rounded-lg transform rotate-3"></div>
                    <div className="absolute inset-2 overflow-hidden rounded-lg shadow-2xl">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#2E7D32] scale-125" : "bg-[#2E7D32]/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E7D32]">Discover Our Premium CTC Teas</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Royal Matka Premium",
                image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=2070&auto=format&fit=crop",
                link: "/products/royal-matka-premium"
              },
              {
                title: "Royal Matka Gold",
                image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000&auto=format&fit=crop",
                link: "/products/royal-matka-gold"
              },
              {
                title: "Royal Matka Masala",
                image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop",
                link: "/products/royal-matka-masala"
              },
              {
                title: "Royal Matka Economy",
                image: "https://images.unsplash.com/photo-1556679343-c1c1c9308e4e?q=80&w=2000&auto=format&fit=crop",
                link: "/products/royal-matka-economy"
              },
              {
                title: "Royal Matka Green Tea",
                image: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?q=80&w=2070&auto=format&fit=crop",
                link: "/products/royal-matka-green"
              }
            ].map((product, index) => (
              <Link
                href={product.link}
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform perspective-1000"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#333333]/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <span className="text-sm bg-[#2E7D32] px-3 py-1 rounded-md inline-block">Shop Now</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
