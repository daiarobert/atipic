# 🧠 Atipic – Autism Support Center Website (MERN Stack)

**Atipic** is a full-stack web application built for an autism support center. The platform includes both a public-facing website and an internal admin dashboard, enabling staff to manage content such as articles, team members, and homepage sections — all without needing technical knowledge.

---

## ✨ Features

### 🌐 Public Website
- Informational homepage presenting the mission and services of the center
- Dynamic blog section for articles and updates
- Publicly visible team section with member bios and images
- Responsive design optimized for accessibility

### 🔐 Admin Dashboard
- Secure login system using JWT authentication
- Admin panel with protected routes
- Ability to create, update, and delete:
  - Articles
  - Team members
  - Homepage content
- Intuitive UI using Tailwind CSS, DaisyUI, and ShadCN
- Built-in image and text management

---

## 🛠 Tech Stack

- **Frontend:** React, Bootstrap CSS, React Router
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Custom JWT-based login system
- **State Management:** React Context API
- **Deployment:** Netlify (frontend), Heroku (backend)

---

## 🚀 Getting Started

### 🔧 Prerequisites
- Node.js
- MongoDB URI (from MongoDB Atlas or local instance)
- JWT Secret (for token generation and validation)

  
🧠 What I Learned
Building secure authentication with JWT and protected routes

Structuring a full MERN project from scratch

Creating a dashboard for content management

Using React + Bootstrap for modern, accessible UI

Connecting frontend and backend using REST APIs

🎯 Purpose
The aim of this project is to demonstrate how technology can empower social impact organizations, such as autism support centers, by making content management easy, scalable, and secure.

Built with compassion 🧩

### 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/daiarobert/atipic.git
cd atipic

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

# Run backend
cd server
npm run dev

# In a new terminal, run frontend
cd client
npm start
```
