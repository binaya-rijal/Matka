import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import { getFeaturedProducts } from "@/data/products";
import { getRandomTestimonials } from "@/data/testimonials";
import { getRecentBlogPosts } from "@/data/blog";

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const testimonials = getRandomTestimonials(3);
  const recentPosts = getRecentBlogPosts(3);

  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Premium Teas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our selection of premium CTC teas crafted with over 25 years of expertise from the finest tea gardens of Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="px-6 py-3 bg-[#1a472a] text-white rounded-md hover:bg-[#143d23] transition duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1566813916511-32044fafe2da?q=80&w=2070&auto=format&fit=crop"
                alt="Tea Garden in India"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Panchamukhi Chiya Udhyog, the maker of Royal Matka Tea, was founded over 25 years ago with a passion for bringing authentic, high-quality CTC tea to Nepali households. Our journey began in Damak, Jhapa district of eastern Nepal, where we established our tea processing facility.
              </p>
              <p className="text-gray-600 mb-6">
                We work directly with local tea growers to source the finest tea leaves, ensuring consistent quality and supporting the local economy. Every cup of Royal Matka Tea delivers the rich flavor, deep color, and perfect strength that has made it a household name across Nepal.
              </p>
              <Link
                href="/about"
                className="px-6 py-3 bg-[#1a472a] text-white rounded-md hover:bg-[#143d23] transition duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what tea enthusiasts have to say about Royal Matka Tea, Nepal's favorite CTC tea for over 25 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tea Journal</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our blog for Nepali tea recipes, brewing tips, health benefits, and the fascinating world of CTC tea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#1a472a] font-medium hover:underline"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="px-6 py-3 bg-[#1a472a] text-white rounded-md hover:bg-[#143d23] transition duration-300"
            >
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Join Our Royal Matka Tea Community</h2>
            <p className="mb-8 text-gray-600">
              Subscribe to our newsletter for exclusive offers, Nepali tea recipes, brewing tips, and updates from Panchamukhi Chiya Udhyog.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#2E7D32]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#2E7D32] text-white rounded-md hover:bg-[#1B5E20] transition duration-300 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
