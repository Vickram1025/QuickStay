import React, { useState } from "react";
import { FaDatabase, FaLock, FaChartBar, FaCog } from "react-icons/fa";
import b1 from "../Asserts/Brandsimg/b1.webp";
import b2 from "../Asserts/Brandsimg/b2.webp";
import b3 from "../Asserts/Brandsimg/b3.webp";
import b4 from "../Asserts/Brandsimg/b4.webp";
import b5 from "../Asserts/Brandsimg/b5.webp";
import b6 from "../Asserts/Brandsimg/b6.webp";
import b7 from "../Asserts/Brandsimg/b7.webp";
import b8 from "../Asserts/Brandsimg/b8.webp";
import Aboutimg from "../Asserts/About.jpg";

const About = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${Aboutimg})` }}>
        <h1 className="text-blue-700 text-4xl font-bold drop-shadow-2xl p-6 bg-opacity-60 bg-white rounded-lg">
          About QuickStay
        </h1>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Our Mission & Vision</h2>
          <p className="text-gray-600 mt-2">
            We aim to simplify property management by providing an all-in-one solution for room bookings. Our vision is to bring transparency and efficiency to the room booking industry.
          </p>
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Why Choose QuickStay?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {[
            { title: "Real-Time Data", description: "Monitor payments, occupancy, and visitor details with live updates.", icon: <FaDatabase className='text-blue-700 text-2xl' /> },
            { title: "Secure Payments", description: "Manage transactions safely with automated receipt generation.", icon: <FaLock className='text-blue-700 text-2xl' /> },
            { title: "User-Friendly Dashboard", description: "Get a complete overview of your property in a simple and easy-to-use interface.", icon: <FaChartBar className='text-blue-700 text-2xl' /> },
            { title: "Customizable Features", description: "Adjust the system to meet your specific business needs.", icon: <FaCog className='text-blue-700 text-2xl' /> }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex items-center gap-2'>
                {item.icon}
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {[
            { question: "What is QuickStay and how does it help in managing room bookings?", answer: "QuickStay offers real-time data to property owners, including payment details, receipts, guest information, and room availability." },
            { question: "How does QuickStay ensure real-time visibility and transparency?", answer: "QuickStay provides a live dashboard with updates on rent payments, visitor logs, and occupancy tracking." },
            { question: "Can QuickStay be adjusted to meet unique customer needs?", answer: "Yes, QuickStay is fully customizable, allowing property owners to tailor features based on their business requirements." },
            { question: "How is QuickStay different from other room booking management systems?", answer: "QuickStay stands out with its real-time tracking, automated billing, and seamless user experience." },
            { question: "How does QuickStay simplify the overall experience for room booking management?", answer: "With an intuitive dashboard and automated alerts, property owners can manage their room bookings effortlessly." },
          ].map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <button
                className="w-full flex justify-between items-center text-left text-gray-800 font-semibold text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`inline-block transform transition ${openFAQ === index ? "rotate-180" : "rotate-0"}`}>▼</span>
              </button>
              {openFAQ === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Our Brands</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6 mb-5">
          {[
            { image: b1 },
            { image: b2 },
            { image: b3 },
            { image: b4 },
            { image: b5 },
            { image: b6 },
            { image: b7 },
            { image: b8 },
          ].map((brand, index) => (
            <div key={index} className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg">
              <img src={brand.image} alt={`Brand ${index + 1}`} className="w-20 h-20 object-cover rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
