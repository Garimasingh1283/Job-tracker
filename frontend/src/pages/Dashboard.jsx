import React, { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "applied",
  });

  const navigate = useNavigate();

  // 🔹 Fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await api.get("/jobs");
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // 🔹 Filter + Search
  useEffect(() => {
    let updated = jobs;

    if (filter !== "all") {
      updated = updated.filter((job) => job.status === filter);
    }

    if (search) {
      updated = updated.filter(
        (job) =>
          job.company.toLowerCase().includes(search.toLowerCase()) ||
          job.role.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredJobs(updated);
  }, [search, filter, jobs]);

  // 🔹 Add Job
  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!form.company || !form.role) return;

    try {
      const res = await api.post("/jobs", form);
      setJobs((prev) => [res.data, ...prev]);
      setForm({ company: "", role: "", status: "applied" });
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Delete
  const handleDelete = async (id) => {
    await api.delete(`/jobs/${id}`);
    setJobs((prev) => prev.filter((job) => job._id !== id));
  };

  // 🔹 Update
  const updateStatus = async (id, status) => {
    const res = await api.put(`/jobs/${id}`, { status });

    setJobs((prev) =>
      prev.map((job) => (job._id === id ? res.data : job))
    );
  };

  // 🔹 Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const statusColor = (status) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-600";
      case "interview":
        return "bg-yellow-100 text-yellow-600";
      case "offer":
        return "bg-green-100 text-green-600";
      case "rejected":
        return "bg-red-100 text-red-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 🔥 SIDEBAR */}
      <div className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">JobTracker</h2>

        <ul className="space-y-4">
          <li className="font-semibold text-black">Dashboard</li>
          <li className="text-gray-500">Applications</li>
          <li className="text-gray-500">Settings</li>
        </ul>
      </div>

      {/* 🔥 MAIN */}
      <div className="flex-1 p-6">
        {/* 🔹 TOP BAR */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <button
            onClick={handleLogout}
            className="bg-black text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        {/* 🔹 FILTERS */}
        <div className="flex gap-4 mb-6">
          <input
            placeholder="Search..."
            className="border p-2 rounded w-1/3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="border p-2 rounded"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="offer">Offer</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        {/* 🔹 ADD JOB */}
        <div className="bg-white p-5 rounded-xl shadow mb-6">
          <form onSubmit={handleAddJob} className="flex gap-4">
            <input
              className="border p-2 rounded w-full"
              placeholder="Company"
              value={form.company}
              onChange={(e) =>
                setForm({ ...form, company: e.target.value })
              }
            />

            <input
              className="border p-2 rounded w-full"
              placeholder="Role"
              value={form.role}
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            />

            <button className="bg-black text-white px-4 rounded">
              Add
            </button>
          </form>
        </div>

        {/* 🔹 JOB LIST */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <p className="text-gray-500">No jobs found 🚀</p>
          ) : (
            filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold">
                    {job.company}
                  </h3>
                  <p className="text-gray-500">{job.role}</p>

                  <span
                    className={`px-3 py-1 text-sm rounded-full mt-2 inline-block ${statusColor(
                      job.status
                    )}`}
                  >
                    {job.status}
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <select
                    className="border p-1 rounded"
                    value={job.status}
                    onChange={(e) =>
                      updateStatus(job._id, e.target.value)
                    }
                  >
                    <option value="applied">Applied</option>
                    <option value="interview">Interview</option>
                    <option value="offer">Offer</option>
                    <option value="rejected">Rejected</option>
                  </select>

                  <button
                    onClick={() => handleDelete(job._id)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;