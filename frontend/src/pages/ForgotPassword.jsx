import { useState } from "react";
import api from "../api/axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/auth/request-reset", { email });
    alert("Reset link sent (check backend console for now)");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <form className="bg-white p-6 shadow rounded" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}