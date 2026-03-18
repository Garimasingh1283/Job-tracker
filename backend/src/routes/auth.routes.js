const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const validate = require("../middleware/validate");
const authMiddleware = require("../middleware/auth.middleware");

const {
  registerSchema,
  loginSchema,
} = require("../utils/validators/auth.validator");

router.post("/register", validate(registerSchema), authController.register);
router.post("/login", validate(loginSchema), authController.login);
router.get("/me", authMiddleware, authController.getMe);
router.post("/request-reset", authController.requestReset);
router.post("/reset-password/:token", authController.resetPassword);
module.exports = router;