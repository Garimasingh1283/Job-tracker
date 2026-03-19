import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow bg-white dark:bg-pink-900">
      <h1 className="text-xl font-bold">JobTracker</h1>

      <div className="flex gap-4 items-center">
        <DarkModeToggle />
        {token && (
          <Link to="/dashboard">Dashboard</Link>
        )}
      </div>
    </nav>
  );
}