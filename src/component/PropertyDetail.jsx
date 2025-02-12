import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"; // Correct Import

const PropertyDetail = () => {
  const location = useLocation();
  const { property } = location.state; // Extracting the property from state

  const [showPayment, setShowPayment] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentQR, setPaymentQR] = useState("");
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" });
  const [selectedBank, setSelectedBank] = useState("");

  const upiID = "yourupiid@upi";

  const generateQR = () => {
    if (selectedMethod === "UPI") {
      const upiURL = `upi://pay?pa=${upiID}&pn=QuickStay&am=${property.price}&cu=INR`;
      setPaymentQR(upiURL);
    }
  };

  const handlePayment = () => {
    alert(`Payment successful via ${selectedMethod}!`);
    setShowPayment(false);
  };

 
  const googleMapsLink = `https://www.google.com/maps?q=${property.latitude},${property.longitude}`;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <img
          src={property.img || "https://via.placeholder.com/400x300?text=No+Image"}
          alt={property.name}
          className="w-full h-[350px] object-cover rounded-lg shadow-md"
        />
        <h2 className="text-3xl font-semibold mt-6 text-gray-800">{property.name}</h2>
        <p className="text-xl text-gray-600 mt-2">{property.location}</p>
        <p className="text-2xl font-bold text-blue-600 mt-4">₹{property.price}/month</p>

        {/* Google Maps link */}
        <div className="mt-4">
          <a
            href={googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl font-light p-2 rounded-lg bg-gradient-to-r from-[#4285F4] via-[#F4B400] to-[#0F9D58] text-transparent bg-clip-text hover:shadow-md transition-all"

          >
            <b>View on Google Maps</b>
          </a>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800">Amenities</h3>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-lg text-gray-700">
            {property.amenities.map((amenity, index) => (
              <li key={index}>{amenity}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-lg text-gray-800"><strong>Occupancy:</strong> {property.occupancy}</p>
          <p className="text-lg text-gray-800"><strong>Rent Cycle:</strong> {property.rentCycle}</p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Link
            to="/Contact"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Contact us
          </Link>
          <button
            onClick={() => setShowPayment(true)}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition-colors"
          >
            Proceed to Pay
          </button>
        </div>
      </div>

      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Select Payment Method</h2>
            <select
              className="w-full p-2 border rounded-md mb-4"
              value={selectedMethod}
              onChange={(e) => {
                setSelectedMethod(e.target.value);
                setPaymentQR("");
                setCardDetails({ number: "", expiry: "", cvv: "" });
                setSelectedBank("");
              }}
            >
              <option value="">Select Payment Method</option>
              <option value="UPI">UPI</option>
              <option value="Credit/Debit Card">Credit/Debit Card</option>
              <option value="Net Banking">Net Banking</option>
            </select>

            {selectedMethod === "UPI" && (
              <div className="flex flex-col items-center">
                <button
                  onClick={generateQR}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
                >
                  Generate QR Code
                </button>
                {paymentQR && <QRCodeCanvas value={paymentQR} size={200} />}
              </div>
            )}

            {selectedMethod === "Credit/Debit Card" && (
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full p-2 border rounded-md"
                  value={cardDetails.number}
                  onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Valid Thru (MM/YY)"
                  className="w-full p-2 border rounded-md"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="CVV"
                  className="w-full p-2 border rounded-md"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                />
              </div>
            )}

            {selectedMethod === "Net Banking" && (
              <div className="space-y-2">
                {['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Bank','Indian bank'].map((bank, index) => (
                  <label key={index} className="block flex items-center">
                    <input
                      type="radio"
                      name="bank"
                      value={bank}
                      className="mr-2"
                      onChange={() => setSelectedBank(bank)}
                    />
                    {bank}
                  </label>
                ))}
              </div>
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowPayment(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handlePayment}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                disabled={!selectedMethod || (selectedMethod === "Net Banking" && !selectedBank)}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetail;
