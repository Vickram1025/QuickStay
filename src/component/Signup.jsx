import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  mobileNo: "",
  password: "",
};

const Signup = () => {
  const [sign, setSign] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSign((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate Form
  const validateForm = () => {
    let newErrors = {};
    
    if (!sign.userName) newErrors.userName = "Full name is required.";
    if (!sign.email) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(sign.email)) newErrors.email = "Invalid email format.";

    if (!sign.mobileNo) newErrors.mobileNo = "Mobile number is required.";
    else if (!/^\d{10}$/.test(sign.mobileNo)) newErrors.mobileNo = "Enter a valid 10-digit mobile number.";

    if (!sign.password) newErrors.password = "Password is required.";
    else if (sign.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop submission if validation fails

    try {
      setSubmit(true);
      await axios.post("http://localhost:8000/signup", sign);
      setSign(initialState);
      navigate("/login");
    } catch (error) {
      setErrors({ general: "Signup failed. Please try again." });
    } finally {
      setSubmit(false);
    }
  };

  return (
    <div className="min-w-full pb-6 pt-6 flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-700">
      <div className="bg-white lg:w-[400px] w-[90%] min-h-[400px] mx-5 rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Create Your Account</h2>

        {errors.general && <p className="text-red-500 text-sm mb-4 text-center">{errors.general}</p>}

        <form onSubmit={handleSubmit}>

          {/* Full Name */}
          <div>
            <label htmlFor="userName" className="font-medium text-lg text-gray-700">Full Name</label>
            <input
              id="userName"
              autoFocus
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="userName"
              placeholder="Enter your full name"
              value={sign.userName}
              onChange={handleChange}
              required
            />
            {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="font-medium text-lg text-gray-700">Email</label>
            <input
              id="email"
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={sign.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label htmlFor="mobileNo" className="font-medium text-lg text-gray-700">Mobile Number</label>
            <input
              id="mobileNo"
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="mobileNo"
              placeholder="Enter your mobile number"
              value={sign.mobileNo}
              onChange={handleChange}
              pattern="\d{10}"
              maxLength="10"
              required
            />
            {errors.mobileNo && <p className="text-red-500 text-sm">{errors.mobileNo}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="font-medium text-lg text-gray-700">Password</label>
            <input
              id="password"
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={sign.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-4 top-10 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-600 text-white font-semibold rounded-lg transition duration-200 hover:bg-blue-500 disabled:bg-blue-300"
            disabled={submit}
          >
            {submit ? "Submitting..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700 text-lg">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
