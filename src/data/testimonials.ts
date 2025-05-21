export interface Testimonial {
  id: string;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Binod Sharma",
    role: "Tea Enthusiast",
    testimonial: "I've been drinking Royal Matka Premium for over 10 years, and it's still the best CTC tea in Nepal. The rich flavor and perfect strength make it my essential morning companion.",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: "2",
    name: "Suman Tamang",
    role: "Café Owner, Kathmandu",
    testimonial: "As a café owner in Thamel, I'm very particular about the tea I serve. Royal Matka Masala Tea has become our bestseller. The authentic Nepali flavor and consistent quality keep my customers coming back for more.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    name: "Sarita Gurung",
    role: "Homemaker",
    testimonial: "Royal Matka Tea has been part of our family tradition for generations. I particularly love the Royal Matka Gold for special occasions. It has the perfect strength and aroma that reminds me of my childhood in eastern Nepal.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: "4",
    name: "Deepak Adhikari",
    role: "Food Blogger",
    testimonial: "I've reviewed many Nepali tea brands on my blog, and Royal Matka consistently stands out for its quality and authentic flavor. Their commitment to maintaining traditional Nepali tea craftsmanship while ensuring consistent quality is commendable.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    id: "5",
    name: "Anita Shrestha",
    role: "Restaurant Owner, Pokhara",
    testimonial: "My restaurant in Pokhara serves hundreds of cups of tea daily, and we exclusively use Royal Matka Premium. Our customers, both locals and tourists, appreciate the authentic Nepali tea experience it provides.",
    image: "https://randomuser.me/api/portraits/women/25.jpg"
  }
];

export const getRandomTestimonials = (count: number = 3): Testimonial[] => {
  const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
