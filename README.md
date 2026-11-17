# 📅 Appointment & Booking Scheduling System REST API

[![Node.js](https://img.shields.io/badge/Node.js-v18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-v4.21-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3.4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![REST API](https://img.shields.io/badge/Architecture-RESTful%20API-6366F1?style=for-the-badge)](https://restfulapi.net/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

An enterprise-grade **Appointment & Booking Scheduling System REST API** engineered with **Node.js**, **Express.js**, and a responsive dark-mode **Tailwind CSS** management dashboard. Designed for service-based businesses, clinics, consultants, and SaaS platforms, the engine features automated double-booking conflict prevention, real-time slot validation, and full appointment lifecycle management (`Pending`, `Confirmed`, `Cancelled`).

---

## 📋 Table of Contents
1. [System Overview & Business Value](#-system-overview--business-value)
2. [Core Features & Highlights](#-core-features--highlights)
3. [Tech Stack & System Architecture](#-tech-stack--system-architecture)
4. [Project Folder Structure](#-project-folder-structure)
5. [Complete API Endpoints Reference](#-complete-api-endpoints-reference)
6. [Request & Response Payloads (JSON Examples)](#-request--response-payloads-json-examples)
7. [HTTP Status & Error Handling](#-http-status--error-handling)
8. [Local Installation & Configuration](#-local-installation--configuration)
9. [Testing with Browser & cURL](#-testing-with-browser--curl)
10. [Production Scaling & Roadmap](#-production-scaling--roadmap)
11. [Author & Developer](#-author--developer)

---

## 🎯 System Overview & Business Value

Managing client schedules manually leads to overlapping bookings, missed sessions, and administrative bottlenecks. **SlotSync Scheduler (`appointment-booking-api`)** solves this by providing a centralized backend API paired with an interactive scheduling portal:

* **Zero Overbooking Guarantee:** Enforces strict date + time-slot uniqueness checks across active appointments (`Pending` or `Confirmed`), while automatically freeing up slots if a booking is `Cancelled` or `Deleted`.
* **Instant Administrative Control:** Allows operators to confirm pending requests, cancel sessions, or purge outdated records in a single click.
* **Plug-and-Play REST Architecture:** Clean JSON responses make it easy to integrate with React, Next.js, Flutter mobile apps, or third-party webhooks.

---

## 🌟 Core Features & Highlights

* **🛡️ Double-Booking Prevention Engine:** Intercepts duplicate date/slot submissions and responds with an HTTP `409 Conflict` status before writing to the store.
* **🔄 Full Status Lifecycle Management:** Supports real-time transitions across `Pending`, `Confirmed`, and `Cancelled` states via RESTful `PATCH` endpoints.
* **📋 Service Catalog Selection:** Pre-configured consultation and audit categories with smart default date initialization.
* **🎨 Modern Dark-Mode Command UI:** Responsive two-column layout styled with Tailwind CSS (`slate-950` palette) featuring color-coded status badges (`Amber`, `Emerald`, `Red`).
* **🧩 Modular Codebase:** Clean separation of concerns across routing controllers (`bookingRoutes.js`), state storage (`store.js`), and server bootstrap (`server.js`).

---

## 🛠️ Tech Stack & System Architecture

| Layer | Technology | Role & Responsibility |
| :--- | :--- | :--- |
| **Frontend UI** | HTML5, Vanilla JS (ES6+), Tailwind CSS | Interactive booking form, live queue rendering, and async Fetch API calls |
| **Backend Runtime** | Node.js (v18+) | Event-driven non-blocking server execution |
| **Web Framework** | Express.js (v4.21) | RESTful API routing, middleware parsing, and static asset serving |
| **Configuration** | Dotenv & CORS | Environment port binding and cross-origin resource sharing support |

### Request Lifecycle Flow
```text
[Client Browser / API Consumer]
       │
       ├──► GET /api/appointments ──────────► Fetch & Render Live Booking Queue
       │
       ├──► POST /api/appointments ─────────► Validate Fields ─► Check Slot Conflict
       │                                           │                    │
       │                                      [Conflict]           [Available]
       │                                           ▼                    ▼
       │                                     409 Conflict         201 Created
       │
       ├──► PATCH /api/appointments/:id/status ─► Update State (Confirmed / Cancelled)
       │
       └──► DELETE /api/appointments/:id ───────► Remove Record & Free Time Slot
