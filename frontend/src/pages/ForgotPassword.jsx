import { useState } from "react";
import api from "../api/api";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/request-reset", { email });
      setMessage("Reset link generated");
    } catch (err) {
      setMessage("Something went wrong ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Forgot Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 border rounded-lg 
                     bg-white dark:bg-gray-700 
                     text-gray-900 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="w-full bg-black dark:bg-blue-600 text-white p-3 rounded-lg">
          Send Reset Link
        </button>

        {message && (
          <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}