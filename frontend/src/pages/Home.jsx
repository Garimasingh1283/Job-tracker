import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center mt-5 px-6 bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors">

      <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Track Your Job Applications 🚀
      </h1>

      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Organize your job search, track applications, and never miss an opportunity.
      </p>

      <div className="flex justify-center gap-4">
        <Link
          to="/register"
          className="bg-black dark:bg-blue-600 text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
        >
          Get Started
        </Link>

        <Link
          to="/login"
          className="border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Login
        </Link>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        {[
          {
            title: "📊 Track Applications",
            desc: "Keep all your job applications in one place",
          },
          {
            title: "📅 Stay Organized",
            desc: "Manage interviews and statuses easily",
          },
          {
            title: "⚡ Fast & Simple",
            desc: "Minimal UI with easy navigation",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl shadow-md 
                       bg-white dark:bg-gray-800 
                       text-gray-800 dark:text-white 
                       border border-gray-200 dark:border-gray-700
                       transition"
          >
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}