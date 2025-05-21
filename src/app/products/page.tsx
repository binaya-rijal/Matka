import { Metadata } from "next";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Our Products | Matka Tea",
  description: "Explore our collection of premium Nepali teas, traditional clay pots, accessories and specialty blends.",
};

export default function ProductsPage() {
  // Group products by category
  const categories = [...new Set(products.map((product) => product.category))];
  const productsByCategory = categories.map((category) => ({
    category,
    products: products.filter((product) => product.category === category),
  }));

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#2E7D32] text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1523920290228-4f321a939b4c?q=80&w=1974&auto=format&fit=crop')",
            opacity: 0.3,
          }}
        ></div>
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our premium collection of Nepali teas, traditional clay pots, and accessories.
            Each product is carefully selected to bring the authentic taste of Nepal to your cup.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Explore Our Premium Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each of our products is sourced directly from Nepal, ensuring exceptional quality and authentic experience.
            </p>
          </div>

          {/* Filter/Category Navigation */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#all-products"
                className="px-4 py-2 bg-[#2E7D32] text-white rounded-md hover:bg-[#1B5E20] transition duration-300"
              >
                All Products
              </a>
              {categories.map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-2 border border-[#2E7D32] text-[#2E7D32] rounded-md hover:bg-[#2E7D32] hover:text-white transition duration-300"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          {/* All Products */}
          <div id="all-products" className="mb-16">
            <h3 className="text-2xl font-semibold text-[#333333] mb-8 text-center">
              All Products
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
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
          </div>

          {/* Products by Category */}
          {productsByCategory.map(({ category, products }) => (
            <div
              key={category}
              id={category.toLowerCase().replace(/\s+/g, "-")}
              className="mb-16"
            >
              <h3 className="text-2xl font-semibold text-[#333333] mb-8 text-center flex items-center justify-center">
                <span className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>
                {category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product) => (
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
            </div>
          ))}
        </div>
      </section>

      {/* Tea Guide Section */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Tea Brewing Guide
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get the most out of your Nepali tea with our brewing recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#2E7D32]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#333333]">Black Tea</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Temperature:</span> 95-100°C (203-212°F)
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Steep Time:</span> 3-5 minutes
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Quantity:</span> 1 tsp per cup
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Tips:</span> Can be enjoyed with or without milk and sweetener
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#2E7D32]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#333333]">Green Tea</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Temperature:</span> 75-85°C (167-185°F)
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Steep Time:</span> 2-3 minutes
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Quantity:</span> 1 tsp per cup
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Tips:</span> Best enjoyed without milk or sweetener
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#2E7D32]">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#333333]">Matka Tea</h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Temperature:</span> 90-100°C (194-212°F)
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Steep Time:</span> 3-5 minutes
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Quantity:</span> 1-1.5 tsp per cup
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 text-[#2E7D32]">Tips:</span> Best served in traditional clay pots for authentic flavor
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#333333] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our products and ordering process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2E7D32]">
              <h3 className="text-xl font-semibold text-[#333333] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                How fresh are your teas?
              </h3>
              <p className="text-gray-700 ml-11">
                We source our teas directly from the gardens in Nepal and maintain a small inventory to ensure freshness. All our teas are packed with a harvest date and best-before date.
              </p>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2E7D32]">
              <h3 className="text-xl font-semibold text-[#333333] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                How should I store my tea?
              </h3>
              <p className="text-gray-700 ml-11">
                Store your tea in an airtight container away from light, moisture, and strong odors. Avoid refrigeration as tea can absorb moisture and odors from the refrigerator.
              </p>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2E7D32]">
              <h3 className="text-xl font-semibold text-[#333333] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Are your clay pots authentic?
              </h3>
              <p className="text-gray-700 ml-11">
                Yes, all our clay pots (Matkas) are handcrafted by skilled artisans in Nepal using traditional methods. Each pot is unique and made from natural clay that enhances the flavor of the tea.
              </p>
            </div>

            <div className="mb-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2E7D32]">
              <h3 className="text-xl font-semibold text-[#333333] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Are your teas organic?
              </h3>
              <p className="text-gray-700 ml-11">
                Many of our teas are certified organic, and we clearly mark these in the product descriptions. We also work with estates that follow sustainable practices even if they don't have formal certification.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#2E7D32]">
              <h3 className="text-xl font-semibold text-[#333333] mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#2E7D32] rounded-full flex items-center justify-center text-white mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                How do you ensure quality?
              </h3>
              <p className="text-gray-700 ml-11">
                We personally taste and evaluate every tea before adding it to our collection. We also regularly visit our partner gardens and estates in Nepal to ensure they maintain the high standards we expect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
