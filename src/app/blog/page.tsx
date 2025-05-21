import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog | Matka Tea",
  description: "Explore our tea journal for brewing tips, recipes, and the fascinating world of tea.",
};

export default function BlogPage() {
  // Group blog posts by category
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#1a472a] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1531970227416-f0cddeb1f748?q=80&w=2070&auto=format&fit=crop')",
            opacity: 0.3,
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Tea Journal
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our collection of articles, brewing guides, and stories from the world of tea.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="#all-posts"
                className="px-4 py-2 bg-[#1a472a] text-white rounded-md hover:bg-[#143d23] transition duration-300"
              >
                All Posts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`#${category.toLowerCase()}`}
                  className="px-4 py-2 border border-[#1a472a] text-[#1a472a] rounded-md hover:bg-[#1a472a] hover:text-white transition duration-300"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>

          {/* All Posts */}
          <div id="all-posts" className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
              All Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                >
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
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        By {post.author}
                      </span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-[#1a472a] font-medium hover:underline"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Posts by Category */}
          {categories.map((category) => (
            <div
              key={category}
              id={category.toLowerCase()}
              className="mb-16"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts
                  .filter((post) => post.category === category)
                  .map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
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
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-500">
                            {post.date}
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            By {post.author}
                          </span>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-[#1a472a] font-medium hover:underline"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-gray-600 mb-8">
              Stay updated with our latest articles, brewing tips, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 rounded-md flex-grow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a472a]"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#1a472a] text-white rounded-md hover:bg-[#143d23] transition duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
