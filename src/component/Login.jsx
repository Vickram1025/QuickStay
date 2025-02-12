import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [login, setLogin] = useState(initialState);
  const [error, setError] = useState("");
  const [submit, setSubmit] = useState(false);
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      setError("Email and password are required.");
      return;
    }

    try {
      setSubmit(true);
      const res = await axios.post("http://localhost:8000/signin", login);
      localStorage.setItem("token", res.data.token);
      setLogin(initialState);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password.");
    } finally {
      setSubmit(false);
    }
  };

  // Fetch User Data After Login
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axios.get("http://localhost:8000/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("User:", res.data);
    } catch (error) {
      console.log("Error fetching user:", error);
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-w-full h-screen pb-6 pt-6 flex justify-center items-center bg-gradient-to-r from-teal-400 to-blue-700">
      <div className="bg-white lg:w-[400px] w-[90%] min-h-[400px] mx-5 rounded-2xl shadow-xl p-8 ">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="font-medium text-lg text-gray-700">Email</label>
            <input
              id="email"
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-blue-700 hover:shadow-inner hover:shadow-blue-700"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={login.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="font-medium text-lg text-gray-700">Password</label>
            <input
              id="password"
              className="w-full py-3 px-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-blue-700 hover:shadow-inner hover:shadow-blue-700"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={login.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg transition duration-200 hover:bg-blue-500 disabled:bg-blue-300"
            disabled={submit}
          >
            {submit ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-700 text-lg">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
