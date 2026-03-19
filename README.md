# 🚀 Job Tracker Web App

A full-stack **Job Tracking Application** built using the MERN stack that helps users manage and organize their job applications efficiently.

🌐 **Live Demo:** https://job-tracker-seven-zeta.vercel.app/

---

## 📌 Features

* 🔐 **Authentication**

  * User Registration & Login
  * Secure JWT-based authentication
  * Password Reset via Email (Token-based)

* 📊 **Job Management**

  * Add job applications
  * Update job status (Applied, Interview, Offer, Rejected)
  * Delete jobs

* 🔍 **Search & Filter**

  * Search by company or role
  * Filter jobs based on status

* 🌗 **Dark/Light Mode**

  * Toggle between themes for better UX

* 📱 **Responsive UI**

  * Works across desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* JWT Authentication
* Nodemailer (for password reset)

### Database

* MongoDB (via MongoDB Atlas)

### Deployment

* Frontend: Vercel
* Backend: Render

---

## ⚙️ Project Structure

```
Job-tracker/
│
├── frontend/      # React Frontend
├── backend/       # Express Backend
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Garimasingh1283/Job-tracker.git
cd Job-tracker
```

---

### 2️⃣ Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret
JWT_REFRESH_SECRET=your_refresh_secret
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd frontend
npm install
```

Create a `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```bash
npm start
```

---

## 🔗 API Endpoints

| Method | Endpoint                | Description            |
| ------ | ----------------------- | ---------------------- |
| POST   | /api/auth/register      | Register user          |
| POST   | /api/auth/login         | Login user             |
| POST   | /api/auth/request-reset | Request password reset |
| POST   | /api/auth/reset/:token  | Reset password         |
| GET    | /api/jobs               | Get all jobs           |
| POST   | /api/jobs               | Add new job            |

---

## 🔐 Authentication Flow

1. User logs in → receives JWT token
2. Token stored in localStorage
3. Token sent in Authorization header for protected routes

---

## 📸 Screenshots

<img width="1899" height="710" alt="image" src="https://github.com/user-attachments/assets/fafa6910-e7c2-4402-babc-4c62bf241e1e" />
<img width="1902" height="894" alt="image" src="https://github.com/user-attachments/assets/7f7e2f52-d611-42c7-adda-b02ad0ac5003" />
<img width="1896" height="943" alt="image" src="https://github.com/user-attachments/assets/3ff1b9b6-b77c-4273-ac79-51cae50ca794" />

---

