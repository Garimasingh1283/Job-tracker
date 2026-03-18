import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../api/axios";

export default function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post(`/auth/reset-password/${token}`, { password });
    alert("Password updated");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Reset</button>
    </form>
  );
}