export interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
  benefits: string[];
  ingredients: string[];
  weight: string;
}

export const products: Product[] = [
  {
    id: "royal-matka-premium",
    name: "Royal Matka Premium",
    description: "Our flagship premium CTC tea with rich flavor, deep color, and aromatic experience.",
    longDescription: "Royal Matka Premium is our flagship product, crafted from the finest tea leaves grown in the lush hills of Nepal. This premium CTC (Crush, Tear, Curl) tea offers a perfect balance of strength, flavor, and aroma that has made it a household name across Nepal for over 25 years. Each cup delivers a rich, robust experience with a deep amber color and refreshing taste that's perfect for starting your day or enjoying with afternoon snacks.",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=1000&auto=format&fit=crop",
    category: "CTC Tea",
    featured: true,
    benefits: [
      "Rich in antioxidants",
      "Boosts energy and mental alertness",
      "Perfect balance of strength and flavor",
      "Authentic Nepali tea experience"
    ],
    ingredients: ["100% Premium Nepali CTC Tea"],
    weight: "500g"
  },
  {
    id: "royal-matka-gold",
    name: "Royal Matka Gold",
    description: "Premium gold-grade CTC tea with exceptional flavor and aroma for tea connoisseurs.",
    longDescription: "Royal Matka Gold represents the pinnacle of our tea craftsmanship. This gold-grade CTC tea is made from specially selected tea leaves from the highest quality harvests in Nepal. With its exceptional flavor profile, distinctive aroma, and perfect strength, Royal Matka Gold delivers a superior tea experience for connoisseurs. The carefully controlled processing preserves the tea's natural qualities, resulting in a cup that's both invigorating and satisfying.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?q=80&w=1000&auto=format&fit=crop",
    category: "CTC Tea",
    featured: true,
    benefits: [
      "Superior antioxidant content",
      "Enhanced flavor profile",
      "Perfect strength for milk tea",
      "Distinctive aroma"
    ],
    ingredients: ["100% Gold-Grade Nepali CTC Tea"],
    weight: "500g"
  },
  {
    id: "royal-matka-masala",
    name: "Royal Matka Masala Tea",
    description: "Traditional Nepali masala tea blend with cardamom, cinnamon, and ginger.",
    longDescription: "Royal Matka Masala Tea combines our premium CTC tea with authentic Nepali spices for a warming, aromatic experience. This traditional recipe features cardamom, cinnamon, ginger, cloves, and black pepper, creating a comforting and invigorating flavor profile that's perfect for any time of day. Enjoy it with milk for a creamy, indulgent beverage that's been a favorite in Nepali households for generations.",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1561336526-2914f13ceb36?q=80&w=1000&auto=format&fit=crop",
    category: "Blended Tea",
    featured: true,
    benefits: [
      "Aids digestion",
      "Anti-inflammatory properties",
      "Boosts immunity",
      "Improves circulation"
    ],
    ingredients: [
      "Premium Nepali CTC Tea",
      "Cardamom",
      "Cinnamon",
      "Ginger",
      "Cloves",
      "Black Pepper"
    ],
    weight: "250g"
  },
  {
    id: "royal-matka-economy",
    name: "Royal Matka Economy",
    description: "Affordable everyday CTC tea with good flavor and strength.",
    longDescription: "Royal Matka Economy offers the quality and tradition of Panchamukhi Chiya Udhyog in an affordable package for everyday consumption. This CTC tea delivers good flavor and strength while maintaining the standards that have made Royal Matka a trusted name in Nepali households. Perfect for daily consumption, it provides a satisfying cup that can be enjoyed with or without milk.",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=1000&auto=format&fit=crop",
    category: "CTC Tea",
    featured: false,
    benefits: [
      "Contains antioxidants",
      "Affordable daily consumption",
      "Consistent quality",
      "Traditional Nepali flavor"
    ],
    ingredients: ["100% Nepali CTC Tea"],
    weight: "500g"
  },
  {
    id: "royal-matka-green",
    name: "Royal Matka Green Tea",
    description: "Pure Nepali green tea with delicate flavor and numerous health benefits.",
    longDescription: "Royal Matka Green Tea offers the fresh, delicate flavor of pure Nepali green tea. Grown in the pristine hills of Nepal and carefully processed to preserve its natural qualities, this tea provides a light, refreshing cup with subtle grassy notes and a clean finish. Rich in antioxidants and offering numerous health benefits, it's perfect for those seeking a lighter alternative to traditional black tea.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1000&auto=format&fit=crop",
    category: "Green Tea",
    featured: true,
    benefits: [
      "High in antioxidants",
      "Supports metabolism",
      "Promotes mental clarity",
      "Lower caffeine content"
    ],
    ingredients: ["100% Nepali Green Tea"],
    weight: "250g"
  },
  {
    id: "royal-matka-herbal",
    name: "Royal Matka Herbal Infusion",
    description: "Caffeine-free herbal blend with traditional Nepali herbs and spices.",
    longDescription: "Royal Matka Herbal Infusion is a caffeine-free blend featuring traditional Nepali herbs and spices known for their wellness properties. This soothing infusion combines tulsi (holy basil), ginger, lemongrass, and other carefully selected ingredients to create a calming beverage that can be enjoyed any time of day. Perfect for evening relaxation or for those looking to reduce their caffeine intake while still enjoying a flavorful hot beverage.",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?q=80&w=1000&auto=format&fit=crop",
    category: "Herbal Tea",
    featured: false,
    benefits: [
      "Caffeine-free",
      "Calming properties",
      "Supports digestive health",
      "Traditional Nepali herbs"
    ],
    ingredients: ["Tulsi (Holy Basil)", "Ginger", "Lemongrass", "Cinnamon", "Cardamom"],
    weight: "200g"
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};
