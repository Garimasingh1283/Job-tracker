const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Job Tracker API",
      version: "1.0.0",
      description: "Complete API documentation for Job Tracker",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        RegisterInput: {
          type: "object",
          required: ["name", "email", "password"],
          properties: {
            name: { type: "string", example: "Garima" },
            email: { type: "string", example: "garima@test.com" },
            password: { type: "string", example: "123456" },
          },
        },
        LoginInput: {
          type: "object",
          required: ["email", "password"],
          properties: {
            email: { type: "string", example: "garima@test.com" },
            password: { type: "string", example: "123456" },
          },
        },
        ResetRequest: {
          type: "object",
          properties: {
            email: { type: "string", example: "garima@test.com" },
          },
        },
        ResetPassword: {
          type: "object",
          properties: {
            password: { type: "string", example: "newpassword123" },
          },
        },
        Job: {
          type: "object",
          properties: {
            company: { type: "string", example: "Google" },
            role: { type: "string", example: "SDE Intern" },
            status: {
              type: "string",
              enum: ["applied", "interview", "offer", "rejected"],
            },
            notes: { type: "string", example: "Referral applied" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

module.exports = swaggerJsdoc(options);