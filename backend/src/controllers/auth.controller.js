const authService = require("../services/auth.service");
const nodemailer = require("nodemailer");

// =======================
// 📩 Send Test Email (Ethereal)
// =======================
const sendTestEmail = async (email, token) => {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const resetLink = `http://localhost:3000/reset/${token}`;

  const info = await transporter.sendMail({
    from: '"Job Tracker" <no-reply@jobtracker.com>',
    to: email,
    subject: "Password Reset",
    html: `
      <h3>Password Reset Request</h3>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
    `,
  });

  console.log("📩 Preview URL:", nodemailer.getTestMessageUrl(info));
};

// =======================
// ✅ Register
// =======================
exports.register = async (req, res, next) => {
  try {
    await authService.registerUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
    });
  } catch (error) {
    next(error);
  }
};

// =======================
// ✅ Login
// =======================
exports.login = async (req, res, next) => {
  try {
    const tokens = await authService.loginUser(req.body);

    res.status(200).json(tokens);
  } catch (error) {
    next(error);
  }
};

// =======================
// ✅ Get Current User
// =======================
exports.getMe = async (req, res, next) => {
  try {
    const user = await authService.getCurrentUser(req.user.id);

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

// =======================
// 🔐 Request Password Reset
// =======================
exports.requestReset = async (req, res, next) => {
  try {
    const { email } = req.body; // ✅ get email

    // ✅ generate reset token
    const token = await authService.requestPasswordReset(email);

    // ✅ send email (fake inbox)
    await sendTestEmail(email, token);

    res.status(200).json({
      message: "Password reset link sent to email",
    });
  } catch (error) {
    next(error);
  }
};

// =======================
// 🔐 Reset Password
// =======================
exports.resetPassword = async (req, res, next) => {
  try {
    await authService.resetPassword(
      req.params.token,
      req.body.password
    );

    res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    next(error);
  }
};