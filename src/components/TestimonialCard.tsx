import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

const TestimonialCard = ({
  name,
  role,
  testimonial,
  image,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-custom-card hover:shadow-custom-elevated transition-all duration-300">
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{testimonial}"</p>
      <div className="mt-4 flex text-[#c8a165]">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
