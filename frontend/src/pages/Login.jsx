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
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Welcome Back
        </h2>

        <input
          placeholder="Email"
          className="w-full mb-3 p-3 border rounded-lg"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button className="w-full bg-black text-white p-3 rounded-lg">
          Login
        </button>

        <p className="text-sm mt-4 text-center">
          <Link to="/forgot">Forgot Password?</Link>
        </p>

        <p className="text-sm mt-2 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="font-bold">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}