module.exports = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
    next();
  } catch (error) {
    const message =
      error.issues && error.issues.length > 0
        ? error.issues[0].message
        : "Validation error";

    return res.status(400).json({ message });
  }
};