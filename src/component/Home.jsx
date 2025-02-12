import React from "react";
import bgImage from "../component/assert/bg1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import repg1 from "../Asserts/r1.jpg";
import repg2 from "../Asserts/r2.jpg";
import repg3 from "../Asserts/r3.jpeg";
import repg4 from "../Asserts/r4.jpeg";

import b1 from "../Asserts/Brandsimg/b1.webp";
import b2 from "../Asserts/Brandsimg/b2.webp";
import b3 from "../Asserts/Brandsimg/b3.webp";
import b4 from "../Asserts/Brandsimg/b4.webp";
import b5 from "../Asserts/Brandsimg/b5.webp";
import b6 from "../Asserts/Brandsimg/b6.webp";
import b7 from "../Asserts/Brandsimg/b7.webp";
import b8 from "../Asserts/Brandsimg/b8.webp";

const Explore = () => {
  const cardData = [
    { id: 1, image: repg1, title: "10 Accommodation Listings", link: "#" },
    { id: 2, image: repg2, title: "2 Boys Living Spaces", link: "#" },
    { id: 3, image: repg3, title: "4 Girls Living Spaces", link: "#" },
    { id: 4, image: repg4, title: "4 Co-living Places", link: "#" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-5 pb-9">
      <h1 className="text-3xl font-semibold text-center w-full text-gray-800 mb-6">Explore Our Listings</h1>
      {cardData.map((card) => (
        <a key={card.id} href={card.link} className="text-blue-500">
          <div className="bg-white p-4 rounded-xl shadow-md transition duration-300 shadow-blue-700 hover:shadow-inner hover:shadow-blue-700 h-[250px] w-[200px]">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-40 object-cover rounded-md mb-4 transition-all duration-300 ease-in-out hover:opacity-90"
              loading="lazy"
            />
            <h3 className="font-bold text-lg text-gray-900 transition-all duration-300 ease-in-out hover:text-blue-600">
              {card.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  const testimonials = [
    { id: 1, name: "Sunrise Ladies Living Space", price: "₹5,000", location: "Anna Nagar, Chennai", rating: "5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg1 },
    { id: 2, name: "Royal Comfort Living", price: "₹10,000", location: "T. Nagar, Chennai", rating: "5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg2 },
    { id: 3, name: "Elite Stay Living Space", price: "₹25,000", location: "OMR, Chennai", rating: "5 ⭐", features: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], img: repg3 },
    { id: 4, name: "Sky Haven Living", price: "₹8,000", location: "Velachery, Chennai", rating: "4.5 ⭐", features: ["AC Rooms", "CCTV", "Laundry"], img: repg4 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="min-h-100vh w-full pb-11 flex flex-col justify-center items-center">
      <h2 className="text-center text-gray-800 text-2xl font-serif mb-8"><b>Recommended Accommodations</b></h2>
      <div className="bg-gray-100 p-4 rounded-xl shadow-md transition duration-300 shadow-blue-700 hover:shadow-inner hover:shadow-blue-700 w-[800px] h-[300px]">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex flex-col bg-blue-100 p-2 relative mb-11 rounded-xl shadow-md transition duration-300 shadow-blue-700 hover:shadow-inner hover:shadow-blue-700">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="drop-shadow-2xl shadow-slate-900 w-[400px] h-[250px] rounded-xl"
              />
              <div className="absolute top-20 left-[480px]">
                <p className="text-black font-semibold">{testimonial.name}</p>
                <p className="text-black text-sm">{testimonial.location}</p>
                <p className="text-black text-sm">{testimonial.price}</p>
                <p className="text-black text-sm">{testimonial.rating}</p>
                <ul className="text-black text-sm list-none">
                  {testimonial.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const brands = [
  { image: b1 },
  { image: b2 },
  { image: b3 },
  { image: b4 },
  { image: b5 },
  { image: b6 },
  { image: b7 },
  { image: b8 },
];

const OurBrands = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-6">Our Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {brands.map((brand, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md transition duration-300 shadow-blue-700 hover:shadow-inner hover:shadow-blue-700">
            <img
              src={brand.image}
              alt={brand.name}
              className="w-[500px] h-[100px] object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <h1 className="text-blue-700 text-4xl font-bold drop-shadow-2xl p-6 bg-opacity-60 bg-white rounded-lg">
          Welcome to QuickStay
        </h1>
      </div>
      <Explore />
      <Testimonials />
      <OurBrands />
    </div>
  );
};

export default Home;
