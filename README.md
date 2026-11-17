# 📅 Appointment & Booking Scheduling System REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Appointment & Booking Scheduling System REST API** built with Node.js, Express, automated double-booking conflict prevention, appointment status lifecycle management (`Pending`, `Confirmed`, `Cancelled`), and a responsive dark-mode scheduling dashboard styled with **Tailwind CSS**.

---

## 📋 Table of Contents
1. [Core Features & Highlights](#-core-features--highlights)
2. [Tech Stack & Architecture](#-tech-stack--architecture)
3. [Project Folder Structure](#-project-folder-structure)
4. [API Endpoints Reference](#-api-endpoints-reference)
5. [Local Installation & Setup](#-local-installation--setup)
6. [Testing the Application](#-testing-the-application)
7. [Author & Developer](#-author--developer)

---

## 🌟 Core Features & Highlights

* **Double-Booking Prevention Engine:** Automatically checks existing active appointments on the requested date and time slot, returning an HTTP `409 Conflict` error if the slot is already reserved.
* **Status Lifecycle Management:** Supports real-time transitions across `Pending`, `Confirmed`, and `Cancelled` states using RESTful `PATCH` endpoints.
* **Service Catalog Selection:** Pre-configured service options with automatic date defaults for fast booking workflows.
* **Modern Dark-Mode UI:** Clean two-column dashboard styled with Tailwind CSS for instant scheduling and queue management.
* **Clean Modular Architecture:** Separated routing handlers, in-memory store, and server configuration.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5 & Tailwind CSS | Responsive booking form and live appointments management queue |
| **Backend Runtime** | Node.js & Express.js | REST routing, conflict validation logic, and status updates |

---

## 📂 Project Folder Structure

```text
appointment-booking-api/
├── public/
│   └── index.html             # Tailwind CSS booking & scheduling dashboard UI
├── src/
│   ├── routes/
│   │   └── bookingRoutes.js   # Booking CRUD, slot validation & status endpoints
│   └── data/
│       └── store.js           # In-memory database store for appointments
├── server.js                  # Main entry point & static file server
├── package.json               # Dependencies and scripts manifest
├── .env                       # Environment variables configuration
├── .gitignore                 # Git ignore exclusions
└── README.md                  # Comprehensive technical documentation
