import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import findimg from "../Asserts/find.jpg";

// Import property images
import repg1 from "../Asserts/r1.jpg";
import repg2 from "../Asserts/r2.jpg";
import repg3 from "../Asserts/r3.jpeg";
import repg4 from "../Asserts/r4.jpeg";
import repg5 from "../Asserts/r5.jpeg";
import repg6 from "../Asserts/r6.webp";
import repg7 from "../Asserts/r7.jpeg";
import repg8 from "../Asserts/r8.webp";
import repg9 from "../Asserts/r9.jpeg";
import repg10 from "../Asserts/r10.jpg";

// Define default filters
const defaultFilters = {
  type: "All",
  occupancy: "All",
  priceRange: { min: 3000, max: 30000 },
  rentCycle: "All",
  gracePeriod: "All",
};

const properties = [
  { 
    name: "QuickStay Girls Room - Anna Nagar", 
    location: "No. 12, 3rd Cross Street, Anna Nagar, Chennai, Tamil Nadu - 600040", 
    amenities: ["Hygienic Food", "Wi-Fi", "Fully Furnished"], 
    price: 5000, 
    rating: 5, 
    type: "Girls", 
    occupancy: "Single", 
    rentCycle: "01-01",  
    img: repg1, 
    path: "/PropertyDetail/QuickStay-Girls-Room-Anna-Nagar", 
    googleMapLink: "https://www.google.com/maps?q=No.+12,+3rd+Cross+Street,+Anna+Nagar,+Chennai,+Tamil+Nadu+-+600040"
  },
  { 
    name: "QuickStay Boys Room - Egmore", 
    location: "Flat 5B, Gandhi Street, Egmore, Chennai, Tamil Nadu - 600008", 
    amenities: ["Wi-Fi", "Hygienic Food", "CCTV"], 
    price: 8000, 
    rating: 3, 
    type: "Boys", 
    occupancy: "Double", 
    rentCycle: "10-10",  
    img: repg2, 
    path: "/PropertyDetail/QuickStay-Boys-Room-Egmore", 
    googleMapLink: "https://www.google.com/maps?q=Flat+5B,+Gandhi+Street,+Egmore,+Chennai,+Tamil+Nadu+-+600008"
  },
  { 
    name: "QuickStay Girls Room - Tambaram", 
    location: "No. 27, M.G. Road, Tambaram, Chennai, Tamil Nadu - 600045", 
    amenities: ["R.O. Water", "Power Backup", "Fully Furnished"], 
    price: 12000, 
    rating: 4, 
    type: "Girls", 
    occupancy: "Triple", 
    rentCycle: "15-15", 
    img: repg3, 
    path: "/PropertyDetail/QuickStay-Girls-Room-Tambaram", 
    googleMapLink: "https://www.google.com/maps?q=No.+27,+M.G.+Road,+Tambaram,+Chennai,+Tamil+Nadu+-+600045"
  },
  { 
    name: "QuickStay Co-Living Space - Chengalpattu", 
    location: "House No. 78, New Market Road, Chengalpattu, Tamil Nadu - 603001", 
    amenities: ["Laundry/Washing Machine", "CCTV", "Daily Newspaper"], 
    price: 15000, 
    rating: 4, 
    type: "Co-living", 
    occupancy: "3+", 
    rentCycle: "01-01",  
    img: repg4, 
    path: "/PropertyDetail/QuickStay-Co-Living-Chengalpattu", 
    googleMapLink: "https://www.google.com/maps?q=House+No.+78,+New+Market+Road,+Chengalpattu,+Tamil+Nadu+-+603001"
  },
  { 
    name: "QuickStay Co-Living Space - Chennai Central", 
    location: "No. 9A, Wall Tax Road, Chennai Central, Tamil Nadu - 600003", 
    amenities: ["Hygienic Food", "Power Backup", "Wi-Fi"], 
    price: 7000, 
    rating: 2, 
    type: "Co-living", 
    occupancy: "Single", 
    rentCycle: "10-10",  
    img: repg5, 
    path: "/PropertyDetail/QuickStay-Co-Living-Chennai-Central", 
    googleMapLink: "https://www.google.com/maps?q=No.+9A,+Wall+Tax+Road,+Chennai+Central,+Tamil+Nadu+-+600003"
  },
  { 
    name: "QuickStay Girls Room - Velachery", 
    location: "Flat No. 14, 2nd Avenue, Velachery, Chennai, Tamil Nadu - 600042", 
    amenities: ["Wi-Fi", "Air Conditioning", "Fully Furnished"], 
    price: 9500, 
    rating: 4, 
    type: "Girls", 
    occupancy: "Double", 
    rentCycle: "01-01",  
    img: repg6, 
    path: "/PropertyDetail/QuickStay-Girls-Room-Velachery", 
    googleMapLink: "https://www.google.com/maps?q=Flat+No.+14,+2nd+Avenue,+Velachery,+Chennai,+Tamil+Nadu+-+600042"
  },
  { 
    name: "QuickStay Boys Room - Poonamallee", 
    location: "Plot No. 33, Thiruvalluvar Street, Poonamallee, Chennai, Tamil Nadu - 600056", 
    amenities: ["Laundry", "CCTV", "Wi-Fi"], 
    price: 8000, 
    rating: 3, 
    type: "Boys", 
    occupancy: "Triple", 
    rentCycle: "15-15",  
    img: repg7, 
    path: "/PropertyDetail/QuickStay-Boys-Room-Poonamallee", 
    googleMapLink: "https://www.google.com/maps?q=Plot+No.+33,+Thiruvalluvar+Street,+Poonamallee,+Chennai,+Tamil+Nadu+-+600056"
  },
  { 
    name: "QuickStay Co-Living Space - Koyambedu", 
    location: "No. 45, Near CMBT Bus Stand, Koyambedu, Chennai, Tamil Nadu - 600107", 
    amenities: ["Gym", "Power Backup", "Free Parking"], 
    price: 11000, 
    rating: 5, 
    type: "Co-living", 
    occupancy: "3+", 
    rentCycle: "01-01",  
    img: repg8, 
    path: "/PropertyDetail/QuickStay-Co-Living-Koyambedu", 
    googleMapLink: "https://www.google.com/maps?q=No.+45,+Near+CMBT+Bus+Stand,+Koyambedu,+Chennai,+Tamil+Nadu+-+600107"
  },
  { 
    name: "QuickStay Girls Room - Avadi", 
    location: "Door No. 22, Nehru Street, Avadi, Chennai, Tamil Nadu - 600054", 
    amenities: ["Wi-Fi", "Power Backup", "24/7 Security"], 
    price: 8500, 
    rating: 4, 
    type: "Girls", 
    occupancy: "Single", 
    rentCycle: "10-10",  
    img: repg9, 
    path: "/PropertyDetail/QuickStay-Girls-Room-Avadi", 
    googleMapLink: "https://www.google.com/maps?q=Door+No.+22,+Nehru+Street,+Avadi,+Chennai,+Tamil+Nadu+-+600054"
  },
  { 
    name: "QuickStay Co-Living Space - Tiruvallur", 
    location: "No. 67, Old Market Road, Tiruvallur, Tamil Nadu - 602001", 
    amenities: ["Air Conditioning", "Laundry", "Wi-Fi"], 
    price: 12000, 
    rating: 4, 
    type: "Co-living", 
    occupancy: "Double", 
    rentCycle: "01-01",  
    img: repg10, 
    path: "/PropertyDetail/QuickStay-Co-Living-Tiruvallur", 
    googleMapLink: "https://www.google.com/maps?q=No.+67,+Old+Market+Road,+Tiruvallur,+Tamil+Nadu+-+602001"
  }

];

const Find = () => {
  const navigate = useNavigate();
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [filters, setFilters] = useState(defaultFilters);

  const handleLoadMore = () => {
    setVisibleProperties((prev) => Math.min(prev + 3, filteredProperties.length));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "minPrice" || name === "maxPrice") {
      setFilters((prevFilters) => ({
        ...prevFilters,
        priceRange: {
          ...prevFilters.priceRange,
          [name === "minPrice" ? "min" : "max"]: parseInt(value),
        },
      }));
    } else {
      setFilters({ ...filters, [name]: value });
    }
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      return (
        (filters.type === "All" || property.type === filters.type) &&
        (filters.occupancy === "All" || property.occupancy === filters.occupancy) &&
        property.price >= filters.priceRange.min &&
        property.price <= filters.priceRange.max &&
        (filters.rentCycle === "All" || property.rentCycle === filters.rentCycle) &&
        (filters.gracePeriod === "All" || property.gracePeriod === filters.gracePeriod)
      );
    });
  }, [filters]);

  return (
    <div>
      <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${findimg})` }}>
        <h1 className="text-blue-700 text-4xl font-bold drop-shadow-2xl p-6 bg-opacity-60 bg-white rounded-lg">
          Find Your Perfect Stay Rooms
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-gray-100 p-10 rounded-lg shadow-md">
          {/* Filters Section */}
          <button onClick={handleClearFilters} className="mb-4 text-blue-600">Clear All Filters</button>
          <div className="mb-3">
            <label className="block font-medium">Looking for?</label>
            {["All", "Girls", "Boys", "Co-living"].map((option) => (
              <label key={option} className="flex items-center space-x-2 mt-1">
                <input type="radio" name="type" value={option} checked={filters.type === option} onChange={handleFilterChange} />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <div className="mb-3">
            <label className="block font-medium">Occupancy</label>
            {["All", "Single", "Double", "Triple", "3+"].map((option) => (
              <label key={option} className="flex items-center space-x-2 mt-1">
                <input type="radio" name="occupancy" value={option} checked={filters.occupancy === option} onChange={handleFilterChange} />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <div className="mb-3">
            <label className="block font-medium">Price Range</label>
            <div className="flex flex-col mb-2">
              <p><b>Min price</b></p>
              <input
                type="range"
                name="minPrice"
                min="3000"
                max="30000"
                value={filters.priceRange.min}
                onChange={handleFilterChange}
                className="w-full"
              />
              <span><b>₹{filters.priceRange.min}</b></span>
            </div>

            <hr className="h-[2px] bg-gray-800" />

            <div className="flex flex-col mt-2">
              <p><b>Max Price</b></p>
              <input
                type="range"
                name="maxPrice"
                min="3000"
                max="30000"
                value={filters.priceRange.max}
                onChange={handleFilterChange}
                className="w-full"
              />
              <span><b>₹{filters.priceRange.max}</b></span>
            </div>
          </div>

          <div className="mb-3">
            <label className="block font-medium">Rent Cycle</label>
            {["All", "01-01", "10-10", "15-15"].map((option) => (
              <label key={option} className="flex items-center space-x-2 mt-1">
                <input type="radio" name="rentCycle" value={option} checked={filters.rentCycle === option} onChange={handleFilterChange} />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
            {filteredProperties.slice(0, visibleProperties).map((property) => (
              <div key={property.name} className="bg-white rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
                <img
                  src={property.img || "https://via.placeholder.com/400x300?text=No+Image"}
                  alt={property.name}
                  className="w-full h-[230px] object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{property.name}</h2>
                 
                  <p className="text-lg font-bold text-blue-600">₹{property.price}/month</p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => navigate(`/PropertyDetail/${encodeURIComponent(property.name)}`, { state: { property } })}
                  >
                    View The Hostel Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {visibleProperties < filteredProperties.length && (
            <button onClick={handleLoadMore} className="px-4 py-2 bg-blue-500 text-white rounded ">Load More</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Find;
