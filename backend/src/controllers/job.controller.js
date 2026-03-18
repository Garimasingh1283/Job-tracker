const jobService = require("../services/job.service");

exports.createJob = async (req, res, next) => {
  try {
    const job = await jobService.createJob(req.user.id, req.body);
    res.status(201).json(job);
  } catch (err) {
    next(err);
  }
};

exports.getJobs = async (req, res, next) => {
  try {
    const jobs = await jobService.getJobs(req.user.id);
    res.status(200).json(jobs);
  } catch (err) {
    next(err);
  }
};

exports.updateJob = async (req, res, next) => {
  try {
    const job = await jobService.updateJob(
      req.user.id,
      req.params.id,
      req.body
    );
    res.status(200).json(job);
  } catch (err) {
    next(err);
  }
};

exports.deleteJob = async (req, res, next) => {
  try {
    await jobService.deleteJob(req.user.id, req.params.id);
    res.status(200).json({ message: "Job deleted" });
  } catch (err) {
    next(err);
  }
};