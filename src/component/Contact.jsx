import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import imgcontact from "../Asserts/contact.webp";

const Contactlogo = () => {
  return (
    <div className="h-screen bg-cover bg-center flex items-center justify-center relative" style={{ backgroundImage: `url(${imgcontact})` }}>
      <h1 className="text-blue-500 text-4xl font-semibold bg-opacity-60 py-2 px-6 absolute left-96 ">
        <i>CONTACT US</i>
      </h1>
    </div>
  );
};

const Contactsection1 = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    emailjs
      .sendForm('service_y1ixwgt', 'template_uwcz04n', form.current, {
        publicKey: '7SP1WSf490qmmzhO6',
      })
      .then(
        () => {
          setIsSubmitted(true);
          setLoading(false);
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-6 p-9 w-full max-w-7xl mx-auto text-lg">
      <div className="bg-blue-400 p-6 rounded-lg w-full md:max-w-md text-left shadow-lg shadow-blue-700 hover:shadow-inner hover:shadow-blue-700">
        <h2 className="text-xl font-semibold text-black"><b>Contact Details</b></h2>
        <div className="text-black space-y-2">
          <h3 className="font-medium">Email Address</h3>
          <p>quickstay8@gmail.com</p>
        </div>
        <div className="text-black space-y-2">
          <h3 className="font-medium">Phone Numbers</h3>
          <p>Chennai : 92570 30889</p>
          <p>vickram : 90017 99588</p>
        </div>
        <div className="text-black space-y-2">
          <h3 className="font-medium">Address</h3>
          <p>Unit no. - 12A, Ground Floor, Olympia Tech Park, Guindy, Chennai, Tamil Nadu 600032</p>
          <p>15 & 16, 10th Floor, Tidel Park, Tharamani, Chennai, Tamil Nadu 600113</p>
        </div>
      </div>

      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg shadow-blue-700 hover:shadow-inner hover:shadow-blue-700">
        {isSubmitted ? (
          <div className="bg-blue-100 p-4 rounded-lg text-center">
            <h2 className="text-gray-900 text-xl font-semibold">Message Sent Successfully!</h2>
            <p className="text-gray-900 mt-2">We will get back to you soon.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300"
              onClick={() => setIsSubmitted(false)}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-blue-700 hover:shadow-inner hover:shadow-blue-700"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  name="from_email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-blue-700 hover:shadow-inner hover:shadow-blue-700"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-600">Message</label>
                <textarea
                  name="message"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-blue-700 hover:shadow-inner hover:shadow-blue-700"
                  placeholder="Type your message"
                  rows="4"
                  required
                ></textarea>
              </div>

              {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300 flex justify-center items-center"
                disabled={loading}
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 mr-3 border-t-2 border-white rounded-full" viewBox="0 0 24 24"></svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <Contactlogo />
      <Contactsection1 />
    </div>
  );
};

export default Contact;
