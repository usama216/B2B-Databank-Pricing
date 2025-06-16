import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechCorp',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'The Pro plan has transformed how we handle our projects. The advanced analytics are invaluable.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'CTO at StartupX',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    text: 'We switched to the Enterprise plan and couldn\'t be happier. The support team is exceptional.',
    rating: 4
  },
  {
    name: 'Emily Davis',
    role: 'Product Manager',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    text: 'The Basic plan was perfect for our small team. We have grown with the platform.',
    rating: 5
  },
  {
    name: 'John Smith',
    role: 'Lead Developer',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    text: 'Great value for money and the customer service is top-notch.',
    rating: 4
  },
  {
    name: 'Anna Lee',
    role: 'Marketing Director',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
    text: 'The features are exactly what we needed to scale our business.',
    rating: 5
  },
  // ...add up to 15 testimonials
];

const CustomPrevArrow = (props) => (
  <button
    {...props}
    className="slick-arrow slick-prev z-10 left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow p-2 flex items-center justify-center hover:bg-blue-100 focus:outline-none"
    style={{ ...props.style, display: 'block' }}
    aria-label="Previous"
  >
    <FaChevronLeft className="text-blue-600 text-xl" />
  </button>
);

const CustomNextArrow = (props) => (
  <button
    {...props}
    className="slick-arrow slick-next z-10 right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow p-2 flex items-center justify-center hover:bg-blue-100 focus:outline-none"
    style={{ ...props.style, display: 'block' }}
    aria-label="Next"
  >
    <FaChevronRight className="text-blue-600 text-xl" />
  </button>
);

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  adaptiveHeight: false,
  swipe: true,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        arrows: true,
        dots: true,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true,
      },
    },
  ],
};

const StarRating = ({ value }) => (
  <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, i) => (
      <FaStar key={i} className={i < value ? 'text-yellow-400' : 'text-gray-300'} />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <div className="mt-24">
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map((testimonial, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg flex flex-col items-center p-5 text-center" style={{ minHeight: '370px', height: '100%' }}>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-16 w-16 rounded-full mb-4 object-cover border-2 border-blue-200"
            />
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
            <StarRating value={testimonial.rating} />
            <p className="text-gray-700 text-base mb-2 px-2">{testimonial.text}</p>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Testimonials; 