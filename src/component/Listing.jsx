import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const roomData = [
  { block: "1 Block", price: 15000, rooms: 3 },
  { block: "2 Block", price: 12000, rooms: 3 },
  { block: "3 Block", price: 10000, rooms: 3 }
];

const Listing = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const propertyNames = ["Trinity Stay", "Teja Stay"];
  const property = propertyNames[id] || "Unknown Stay";

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">{property} - Room Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomData.map((room, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer p-4 hover:shadow-xl transition"
            onClick={() => navigate(`/room/${index}`)}
          >
            <h2 className="text-xl font-semibold">{room.block}</h2>
            <p className="text-gray-600">Price: ₹{room.price}</p>
            <p className="text-gray-600">Rooms Available: {room.rooms}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
