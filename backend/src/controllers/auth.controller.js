const authService = require("../services/auth.service");

exports.register = async (req, res, next) => {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const tokens = await authService.loginUser(req.body);
    res.status(200).json(tokens);
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const user = await authService.getCurrentUser(req.user.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};
exports.requestReset = async (req, res, next) => {
  try {
    const token = await authService.requestPasswordReset(req.body.email);
    res.status(200).json({ message: "Reset token generated", token });
  } catch (error) {
    next(error);
  }
};


exports.resetPassword = async (req, res, next) => {
  try {
    await authService.resetPassword(
      req.params.token,
      req.body.password
    );
    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    next(error);
  }
};