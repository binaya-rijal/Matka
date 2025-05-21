import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Royal Matka Tea",
  description: "Learn about Royal Matka Tea's story, mission, and commitment to quality Nepali tea.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#2E7D32] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070&auto=format&fit=crop')",
            opacity: 0.3,
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the passion and commitment behind Royal Matka Tea's journey to bring you the finest CTC teas from Nepal.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Royal Matka Tea, our mission is to share the rich heritage and exceptional quality of Nepali CTC teas with the world. We believe that every cup of tea tells a story – of the land it comes from, the people who nurture it, and the traditions that shape it.
              </p>
              <p className="text-gray-600 mb-4">
                We are committed to sourcing the finest tea leaves directly from the lush tea gardens of eastern Nepal. By establishing direct relationships with local farmers, we ensure fair compensation for their expertise and dedication while bringing you teas of unparalleled quality and authenticity.
              </p>
              <p className="text-gray-600">
                Our passion extends beyond just selling tea. We strive to educate and inspire tea lovers about the unique characteristics of Nepali CTC tea, its health benefits, and the art of brewing the perfect cup.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=2070&auto=format&fit=crop"
                alt="Tea Plantation in Nepal"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#2E7D32] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">The Beginning</h3>
              <p className="text-gray-600">
                Royal Matka Tea began in 1998 when Panchamukhi Chiya Udhyog was established in Damak, Jhapa. Our founder, Mr. Bhim Prasad Sharma, recognized the potential of Nepal's eastern tea regions and set out to create a premium CTC tea that would become a household name.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#2E7D32] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Building Excellence</h3>
              <p className="text-gray-600">
                Over the next two decades, we perfected our tea processing techniques, invested in modern machinery, and established strong relationships with local tea farmers. Our commitment to quality helped us become one of Nepal's leading CTC tea producers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#2E7D32] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Growing Legacy</h3>
              <p className="text-gray-600">
                Today, Royal Matka Tea is enjoyed in millions of homes across Nepal and beyond. We continue to innovate with new blends while maintaining the traditional quality that has made our tea a beloved part of Nepali culture for over 25 years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-[#2E7D32]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. Our CTC tea is carefully processed using the finest tea leaves from Nepal's eastern tea gardens, ensuring a rich flavor and aroma in every cup.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-[#2E7D32]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to environmentally responsible practices throughout our production process, from tea garden to packaging, minimizing our ecological footprint.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-[#2E7D32]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600">
                We support local tea farmers and workers through fair compensation and sustainable partnerships, contributing to the growth of Nepal's tea industry.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-[#2E7D32]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tradition</h3>
              <p className="text-gray-600">
                We honor Nepal's rich tea heritage while educating tea lovers about the unique characteristics and brewing methods of authentic Nepali CTC tea.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="https://randomuser.me/api/portraits/men/42.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Bhim Prasad Sharma</h3>
                <p className="text-gray-600 mb-4">Founder & Managing Director</p>
                <p className="text-gray-700">
                  With over 25 years of experience in the tea industry, Bhim Prasad founded Panchamukhi Chiya Udhyog in 1998 and has led Royal Matka Tea to become a household name across Nepal.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="https://randomuser.me/api/portraits/women/42.jpg"
                  alt="Production Manager"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Sarita Gurung</h3>
                <p className="text-gray-600 mb-4">Production Manager</p>
                <p className="text-gray-700">
                  Sarita oversees our tea processing facility, ensuring that every batch of Royal Matka Tea meets our exacting standards for quality, flavor, and aroma.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src="https://randomuser.me/api/portraits/men/36.jpg"
                  alt="Tea Garden Liaison"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dipak Tamang</h3>
                <p className="text-gray-600 mb-4">Tea Garden Liaison</p>
                <p className="text-gray-700">
                  Dipak works directly with tea gardens across eastern Nepal to source the finest tea leaves and ensure sustainable farming practices are maintained.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2E7D32] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Royal Matka Tea Difference</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover our collection of premium Nepali CTC teas and join us on this flavorful journey.
          </p>
          <Link
            href="/products"
            className="px-8 py-4 bg-[#FF5722] text-white rounded-md hover:bg-[#E64A19] transition duration-300 inline-block cursor-pointer"
          >
            Explore Our Teas
          </Link>
        </div>
      </section>
    </div>
  );
}
