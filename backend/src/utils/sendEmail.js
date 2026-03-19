const nodemailer = require("nodemailer");

const sendTestEmail = async (email, token) => {
  // create test account
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
    html: `<a href="${resetLink}">Reset Password</a>`,
  });

  console.log("Preview URL: ", nodemailer.getTestMessageUrl(info));
};