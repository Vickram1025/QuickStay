import React, { useState } from "react";
import bgblog from "../Asserts/bgblog.jpg";
import bp1 from "../Asserts/blog/bp1.jpg";
import bp2 from "../Asserts/blog/bp2.jpg";
import bp3 from "../Asserts/blog/bp3.jpg";
import bp4 from "../Asserts/blog/bp4.jpg";
import bp5 from "../Asserts/blog/bp5.jpg";
import bp6 from "../Asserts/blog/bp6.jpg";

const allBlogs = [
  { id: 1, title: "Find Your Ideal Stay in OMR, Chennai with QuickStay", date: "13-01-2025", author: "QuickStay", image: bp1 },
  { id: 2, title: "Why Choose a Premium Rental in Tambaram? Benefits and Top Choices", date: "11-07-2024", author: "QuickStay", image: bp2 },
  { id: 3, title: "Affordable Room Rentals in Velachery and Adyar", date: "11-07-2024", author: "TS", image: bp3 },
  { id: 4, title: "How to Find the Best Short-Term Rentals in Anna Nagar?", date: "21-06-2024", author: "QuickStay", image: bp4 },
  { id: 5, title: "Explore the Best Room Rentals in Guindy: A Complete Guide", date: "21-06-2024", author: "TS", image: bp5 },
  { id: 6, title: "Transforming Your Stay Experience in T. Nagar", date: "21-06-2024", author: "QuickStay", image: bp6 },
  { id: 7, title: "Comfortable Stays Near Marina Beach, Chennai", date: "15-06-2024", author: "QuickStay", image: bp1 },
  { id: 8, title: "Best Budget-Friendly Rentals in Mylapore", date: "10-06-2024", author: "QuickStay", image: bp2 },
  { id: 9, title: "Top Monthly Rental Options in Saidapet", date: "05-06-2024", author: "TS", image: bp3 },
  { id: 10, title: "Discover Convenient Short-Term Rentals in Perungudi", date: "01-06-2024", author: "QuickStay", image: bp4 },
  { id: 11, title: "Comfortable Stays Near Marina Beach, Chennai", date: "15-06-2024", author: "QuickStay", image: bp1 },
  { id: 12, title: "Best Budget-Friendly Rentals in Mylapore", date: "10-06-2024", author: "QuickStay", image: bp2 },
  { id: 13, title: "Top Monthly Rental Options in Saidapet", date: "05-06-2024", author: "TS", image: bp3 },
  { id: 14, title: "Discover Convenient Short-Term Rentals in Perungudi", date: "01-06-2024", author: "QuickStay", image: bp4 },
];

const Blog = () => {
  const [blogs, setBlogs] = useState(allBlogs.slice(0, 6)); 
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleShowMore = () => {
    const nextBlogs = allBlogs.slice(visibleBlogs, visibleBlogs + 3); 
    setBlogs((prevBlogs) => [...prevBlogs, ...nextBlogs]);
    setVisibleBlogs(visibleBlogs + 3);
  };

  return (
    <div className="bg-white">
      <div className="h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${bgblog})` }}></div>

      <h1 className="text-center text-2xl mt-6 font-bold text-blue-700">
        Latest Updates & Insights
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white p-4 rounded-xl shadow-md transition duration-300 shadow-blue-700 hover:shadow-inner hover:shadow-blue-700"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
            <div className="mt-3">
              <p className="text-sm text-gray-500 flex items-center">
                <span className="font-semibold">{blog.author}</span> &middot; 📅 {blog.date}
              </p>
              <h2 className="text-lg font-semibold text-gray-900 mt-1">{blog.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {visibleBlogs < allBlogs.length && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={handleShowMore}
            className="bg-blue-700 text-white px-6 py-2 rounded-md hover:bg-blue-800 mb-6 transition text-lg"
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default Blog;
