import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-20 px-6">
      <h1 className="text-5xl font-bold mb-6">
        Track Your Job Applications 🚀
      </h1>

      <p className="text-lg text-blue-600 dark:text-gray-300 mb-8">
        Organize your job search, track applications, and never miss an opportunity.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/register"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Get Started
        </Link>

        <Link
          to="/login"
          className="border px-6 py-3 rounded-xl"
        >
          Login
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-bold mb-2">📊 Track Applications</h3>
          <p>Keep all your job applications in one place</p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-bold mb-2">📅 Stay Organized</h3>
          <p>Manage interviews and statuses easily</p>
        </div>

        <div className="p-6 border rounded-xl shadow-sm">
          <h3 className="font-bold mb-2">⚡ Fast & Simple</h3>
          <p>Minimal UI with easy navigation</p>
        </div>
      </div>
    </div>
  );
}