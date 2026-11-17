# 📅 Appointment & Booking Scheduling System REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Appointment & Booking Scheduling System REST API** built with Node.js, Express, automated double-booking conflict detection, appointment status management (`Pending`, `Confirmed`, `Cancelled`), and a responsive dark-mode scheduling dashboard styled with **Tailwind CSS**.

---

## 🌟 Core Features & Highlights

* **Double-Booking Prevention:** Automatically validates selected date and time slots to block overlapping appointments.
* **Status Lifecycle Management:** Seamless transitions between `Pending`, `Confirmed`, and `Cancelled` states via REST `PATCH` endpoints.
* **Service Catalog Selection:** Supports multiple consultation and service categories with instant UI feedback.
* **Modern Tailwind CSS UI:** Responsive dark-mode scheduling portal with real-time queue updates.

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/appointments` | Retrieves all scheduled appointments. |
| `POST` | `/api/appointments` | Books a new appointment with slot conflict validation. |
| `PATCH` | `/api/appointments/:id/status` | Updates booking status (`Pending`, `Confirmed`, `Cancelled`). |
| `DELETE` | `/api/appointments/:id` | Removes an appointment record. |

---

## ⚙️ Local Installation & Setup

```bash
git clone [https://github.com/Sameerjeez88-max/appointment-booking-api.git](https://github.com/Sameerjeez88-max/appointment-booking-api.git)
cd appointment-booking-api
npm install
npm start