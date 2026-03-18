const Job = require("../models/job.model");
const ApiError = require("../utils/ApiError");

exports.createJob = async (userId, data) => {
  return await Job.create({ ...data, user: userId });
};

exports.getJobs = async (userId) => {
  return await Job.find({ user: userId }).sort({ createdAt: -1 });
};

exports.updateJob = async (userId, jobId, data) => {
  const job = await Job.findOne({ _id: jobId, user: userId });

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  Object.assign(job, data);
  await job.save();

  return job;
};

exports.deleteJob = async (userId, jobId) => {
  const job = await Job.findOneAndDelete({
    _id: jobId,
    user: userId,
  });

  if (!job) {
    throw new ApiError(404, "Job not found");
  }

  return true;
};