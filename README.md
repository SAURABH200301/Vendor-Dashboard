# VendorGuard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version **18.0.1**.

**VendorGuard** is a single-page UI application designed for managing vendor interactions. It features login-based access, role and license management, and clean UI/UX.

### 🔗 Live Demo
**[Open Application](https://chat-app-49705.web.app/)**

---

## 🚀 Key Features

- 🔐 **Login/Logout System**
  - Simple login using `localStorage` (no JWT)
  - `CanActivate` route guard used to protect authenticated routes

- 🧑‍💼 **User Management**
  - Edit vendor/user profiles via a modal dialog
  - Reactive forms with full validation
  - Team badges, roles, and license usage display

- 💬 **Real-time Communication (UI Simulation)**
  - Demonstrates how users from anywhere can connect (non-socket-based placeholder)

- 🎨 **UI/UX**
  - Clean and intuitive interface
  - Easy navigation with modular design
  - Dashboard overview with vendor monitoring and stats

- 📱 **Responsive Design**
  - Optimized for desktop
  - Flexbox + Tailwind CSS used for layout

---

## 📦 Packages Used

### ✅ Dependencies

- `@angular/animations` – Angular animation support
- `@angular/common` – Common directives and pipes
- `@angular/compiler` – Angular compiler
- `@angular/core` – Core Angular framework
- `@angular/forms` – Template-driven + reactive forms support
- `@angular/router` – Client-side routing
- `@primeng/themes` – Theme support for PrimeNG
- `primeng` – Rich UI component library
- `primeicons` – Icon pack for PrimeNG
- `highcharts-angular` – Angular wrapper for Highcharts
- `rxjs` – Reactive programming utilities

### 🛠️ DevDependencies

- `tailwindcss` – Utility-first CSS framework
- `typescript` – TypeScript language and tooling

---

## 📂 Project Structure

- `login/` – Login form with session-based access
- `components/` – Reusable UI components (e.g., Navbar, Badges)
- `services/` – API abstraction and local storage handlers
- `guards/` – AuthGuard for route protection

---

## 🧠 Notes

> This project is a UI prototype — authentication and real-time logic are mocked using `localStorage` and visual feedback.

---

Feel free to contribute or fork this repo for enhancements.
