export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "royal-matka-premium-tea",
    title: "Royal Matka Premium Tea - A Taste of Tradition",
    excerpt: "Experience the rich flavor and aroma of Royal Matka Premium Tea, crafted with care from the finest tea leaves of Nepal.",
    content: `
      <p>Royal Matka Premium Tea is more than just a beverage; it's a celebration of Nepali tea tradition that has been perfected over generations. Our premium CTC tea offers a rich, robust flavor that makes every cup a delightful experience.</p>

      <h2>The Royal Matka Difference</h2>
      <p>What sets Royal Matka Premium Tea apart is our commitment to quality at every step of the process. We carefully select tea leaves from the lush gardens of eastern Nepal, ensuring that only the finest leaves make it into our blend. Our traditional processing methods preserve the natural flavors and beneficial properties of the tea.</p>

      <h2>Perfect for Nepali Milk Tea</h2>
      <p>Royal Matka Premium Tea is specially crafted to create the perfect cup of Nepali milk tea (dudh chiya). Its strong flavor and deep color stand up beautifully to milk, creating that distinctive taste that tea lovers across Nepal have come to cherish. Whether enjoyed in the morning to start your day or as an afternoon refreshment, Royal Matka Premium Tea delivers consistent quality in every cup.</p>

      <h2>A Tradition of Excellence</h2>
      <p>For over 25 years, Royal Matka Tea has been a trusted name in Nepali households. Our dedication to maintaining the highest standards has made us a favorite among tea connoisseurs who appreciate authentic flavor and quality.</p>

      <p>Experience the Royal Matka difference today and discover why we've been Nepal's choice for premium CTC tea for generations.</p>
    `,
    author: "Royal Matka Tea",
    date: "2024-01-15",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1000&auto=format&fit=crop",
    category: "Products"
  },
  {
    id: "health-benefits-of-tea",
    title: "The Health Benefits of Drinking Tea Daily",
    excerpt: "Discover how incorporating Royal Matka Tea into your daily routine can contribute to your overall health and wellbeing.",
    content: `
      <p>Tea is not just a delicious beverage; it's also packed with health benefits that make it a smart addition to your daily routine. Royal Matka Tea, with its premium quality and authentic processing, offers these benefits in every cup.</p>

      <h2>Antioxidant Powerhouse</h2>
      <p>Tea is rich in polyphenols, which are powerful antioxidants that help protect your cells from damage. Regular consumption of tea has been associated with reduced risk of certain chronic diseases and improved overall health.</p>

      <h2>Mental Alertness</h2>
      <p>The moderate caffeine content in Royal Matka Tea provides a gentle energy boost without the jitters often associated with coffee. This makes it perfect for maintaining focus and alertness throughout the day.</p>

      <h2>Digestive Health</h2>
      <p>Tea has traditionally been used to aid digestion, particularly after meals. The compounds in tea can help soothe the digestive system and promote healthy gut function. Royal Matka Tea's robust flavor makes it an excellent choice for after-meal enjoyment.</p>

      <h2>Hydration</h2>
      <p>Contrary to some misconceptions, tea contributes to your daily fluid intake and helps maintain proper hydration. Staying well-hydrated is essential for numerous bodily functions, from temperature regulation to nutrient transport.</p>

      <h2>Cultural Wellness</h2>
      <p>Beyond the physical benefits, the ritual of preparing and enjoying tea has cultural and psychological benefits. Taking time to savor a cup of Royal Matka Tea can be a mindful moment in your busy day, promoting relaxation and mental wellbeing.</p>

      <p>Make Royal Matka Tea part of your daily wellness routine and enjoy both its delicious flavor and health-promoting properties.</p>
    `,
    author: "Royal Matka Tea",
    date: "2024-02-10",
    image: "https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=1000&auto=format&fit=crop",
    category: "Health"
  },
  {
    id: "perfect-nepali-milk-tea",
    title: "How to Make the Perfect Cup of Nepali Milk Tea",
    excerpt: "Learn the authentic method for preparing delicious Nepali milk tea using Royal Matka Premium Tea.",
    content: `
      <p>Nepali milk tea (dudh chiya) is a beloved tradition in Nepal, known for its rich, creamy texture and robust flavor. With Royal Matka Premium Tea, you can create this authentic experience in your own home. Here's our guide to making the perfect cup:</p>

      <h2>Ingredients</h2>
      <ul>
        <li>2 cups water</li>
        <li>1 cup milk (whole milk recommended for authentic taste)</li>
        <li>2 tablespoons Royal Matka Premium Tea</li>
        <li>Sugar to taste</li>
        <li>Optional: Cardamom, ginger, or other spices for masala tea</li>
      </ul>

      <h2>Step 1: Boil the Water</h2>
      <p>In a saucepan, bring the water to a rolling boil. If you're adding spices, add them at this stage to infuse the water with their flavors.</p>

      <h2>Step 2: Add the Tea</h2>
      <p>Add Royal Matka Premium Tea to the boiling water. Let it boil for 2-3 minutes until the water turns a deep reddish-brown color. This extraction process is crucial for developing the full flavor profile.</p>

      <h2>Step 3: Add Milk</h2>
      <p>Add milk to the tea and bring the mixture back to a boil. Unlike many other tea preparations, Nepali tea is boiled with milk for several minutes. This creates the characteristic rich flavor and creamy texture. Let it boil for 3-5 minutes, stirring occasionally.</p>

      <h2>Step 4: Add Sugar and Strain</h2>
      <p>Add sugar according to your preference and stir until dissolved. Strain the tea into cups or glasses using a fine mesh strainer.</p>

      <h2>The Royal Matka Difference</h2>
      <p>The quality of your tea makes all the difference in the final result. Royal Matka Premium Tea is specially crafted to create the perfect cup of Nepali milk tea, with the ideal strength and flavor profile that stands up beautifully to milk and sugar.</p>

      <p>Enjoy your authentic Nepali milk tea experience with Royal Matka Tea – Nepal's favorite for generations!</p>
    `,
    author: "Royal Matka Tea",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000&auto=format&fit=crop",
    category: "Recipes"
  },
  {
    id: "royal-matka-gold-premium",
    title: "Introducing Royal Matka Gold Premium - Our Finest Blend",
    excerpt: "Discover our exclusive Gold Premium blend, crafted for tea connoisseurs who appreciate exceptional quality and flavor.",
    content: `
      <p>We are proud to introduce Royal Matka Gold Premium – the pinnacle of our tea craftsmanship and the result of decades of expertise in tea production. This exclusive blend represents our commitment to excellence and tradition in every cup.</p>

      <h2>Exceptional Quality</h2>
      <p>Royal Matka Gold Premium is crafted from specially selected tea leaves harvested at their peak from the finest tea gardens in eastern Nepal. Our master tea blenders carefully curate each batch to ensure consistent quality and exceptional flavor.</p>

      <h2>Distinguished Flavor Profile</h2>
      <p>What sets Gold Premium apart is its distinctive flavor profile – rich and robust with subtle notes of malt and a smooth finish. The tea produces a beautiful amber liquor with an enticing aroma that promises a superior tea experience.</p>

      <h2>Perfect for Special Occasions</h2>
      <p>While excellent for everyday enjoyment, Royal Matka Gold Premium is particularly suited for special occasions and entertaining guests. Its premium quality makes it an impressive offering that reflects your discerning taste.</p>

      <h2>Traditional Craftsmanship</h2>
      <p>Our Gold Premium blend honors traditional tea-making methods while incorporating modern quality standards. This balance ensures that each cup carries the authentic taste of Nepali tea tradition with consistent excellence.</p>

      <p>Experience the ultimate expression of our tea-making heritage with Royal Matka Gold Premium – where tradition meets exceptional quality in every cup.</p>
    `,
    author: "Royal Matka Tea",
    date: "2024-04-20",
    image: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?q=80&w=1000&auto=format&fit=crop",
    category: "Products"
  }
];

export const getBlogPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRecentBlogPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
