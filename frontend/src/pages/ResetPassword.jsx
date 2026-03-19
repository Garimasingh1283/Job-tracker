import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post(`/auth/reset-password/${token}`, {
        password,
      });
      alert("Password reset successful ✅");
      navigate("/login");
    } catch (err) {
      alert("Invalid or expired token ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full mb-4 p-3 border rounded-lg 
                     bg-white dark:bg-gray-700 
                     text-gray-900 dark:text-white 
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-black dark:bg-blue-600 text-white p-3 rounded-lg">
          Reset Password
        </button>
      </form>
    </div>
  );
}