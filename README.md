# Scent Aura - Luxury Fragrance Boutique

Scent Aura is a full-stack MERN application that provides a premium shopping experience for luxury perfumes. This project demonstrates a complete integration between a React frontend and a Node.js/Express/MongoDB backend.

## 🏛️ Project Architecture
The application follows a standard MERN architecture:
- **Frontend**: React.js with Vite for high-performance builds.
- **Backend**: Node.js & Express.js for RESTful API management.
- **Database**: MongoDB for persistent storage of product and review data.

## ✨ Core Features
- **Luxury Branding**: A cohesive "Gold & White" aesthetic using CSS variables and custom typography.
- **Dynamic Product Loading**: Products are fetched from a MongoDB database via Axios.
- **Responsive Grid**: A fully responsive perfume gallery that works across mobile, tablet, and desktop.
- **Real-time Reviews**: Users can submit experiences and ratings which are stored and displayed instantly.
- **Global State Management**: Efficient use of React hooks (`useState`, `useEffect`) and React Router for seamless navigation.

## 🛠️ Tech Stack
- **Client**: React 18, React Router Dom, Axios, CSS3
- **Server**: Node.js, Express, Mongoose, CORS, Nodemon
- **Database**: MongoDB (Local/Atlas)

## 🚀 Setup & Installation

### 1. Prerequisite
Ensure you have **Node.js** and **MongoDB** installed and running on your system.

### 2. Backend Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

Seed the database with the luxury perfume collection:
```bash
node seed.js
```

Start the server:

```bash
npm start
```

` The backend will run on: http://localhost:5000 `

### 3. Frontend Setup

Navigate to the client directory and install dependencies:

```bash
cd client
npm install
```
Start the development server:

```bash
npm run dev
```

` The application will be available at: http://localhost:5173 `

## 📂 Project Structure

```bash

scent-aura-mern/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Navbar, Footer
│   │   ├── pages/          # Home, ProductDetail
│   │   ├── App.jsx         # Routing logic
│   │   └── main.jsx        # Entry point
├── server/                 # Express backend
│   ├── models/             # Mongoose Schemas
│   ├── seed.js             # Database Seeding script
│   └── server.js           # API Routes & Connection
└── README.md

```

## 👤 About Developer

### Shreyash Desai

[![Portfolio](https://img.shields.io/badge/Portfolio-%23121011.svg?style=for-the-badge&logo=google-chrome&logoColor=white)](https://shreyashdesai09.github.io)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shreyash-desai-886979237/)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ShreyashDesai09)

Note: This project is a demonstration of MERN stack capabilities for academic assessment purposes.