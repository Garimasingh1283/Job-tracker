import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const res = await api.get("/jobs");
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Job Tracker</h1>

      {jobs.map((job) => (
        <div key={job._id} className="border p-3 my-2 rounded">
          <h3>{job.company}</h3>
          <p>{job.role}</p>
          <p>{job.status}</p>
        </div>
      ))}
    </div>
  );
}