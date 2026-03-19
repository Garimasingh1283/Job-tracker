import { useState } from "react";
import api from "../api/api";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.post("/auth/login", form);
    localStorage.setItem("token", res.data.accessToken);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-96 transition-colors"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Welcome Back
        </h2>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg 
                     bg-white dark:bg-gray-700 
                     text-gray-900 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg 
                     bg-white dark:bg-gray-700 
                     text-gray-900 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        {/* BUTTON */}
        <button className="w-full bg-black dark:bg-blue-600 text-white p-3 rounded-lg hover:opacity-90 transition">
          Login
        </button>

        <p className="text-sm mt-4 text-center text-gray-600 dark:text-gray-300">
          <Link to="/forgot" className="hover:underline">
            Forgot Password?
          </Link>
        </p>

        <p className="text-sm mt-2 text-center text-gray-600 dark:text-gray-300">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}