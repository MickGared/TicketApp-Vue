# TicketApp (Vue.js Version)

A **robust ticket management web application** built in **Vue.js 3**.  
This version mirrors the React implementation in layout, functionality, and design.

---

## **Table of Contents**

1. [Features](#features)  
2. [Frameworks & Libraries](#frameworks--libraries)  
3. [Project Structure](#project-structure)  
4. [Setup & Run](#setup--run)  
5. [Usage](#usage)  
6. [State Management & Components](#state-management--components)  
7. [Accessibility & Responsiveness](#accessibility--responsiveness)  
8. [Test Credentials](#test-credentials)  

---

## **Features**

- Landing Page with **hero section, SVG wave, decorative circles, and feature cards**  
- **Authentication**: Login & Signup with inline validation and session simulation  
- **Protected routes** for Dashboard and Ticket Management  
- **Dashboard**: Summary stats of tickets (Total, Open, Resolved)  
- **Ticket Management**: Full CRUD (Create, Read, Update, Delete)  
- **Real-time validation** for ticket fields (`title` required, `status` must be `open`, `in_progress`, `closed`)  
- **Responsive design** and **accessible layout**  
- **Consistent styling** across React and Vue versions  

---

## **Frameworks & Libraries**

- **Vue.js 3**  
- **Vite** (build tool)  
- **Vue Router** (routing)  
- Optional: `Pinia` or `Vuex` (for advanced state management)  
- **Vanilla CSS** for layout and styling  

## **Project Structure**
src/
├─ assets/
│ ├─ main.css
│ └─ main.js
├─ components/
│ ├─ LandingPage.vue
│ ├─ LoginPage.vue
│ ├─ SignupPage.vue
│ ├─ Dashboard.vue
│ ├─ TicketManagement.vue
│ ├─ TicketCard.vue
│ └─ TicketForm.vue
├─ router/
│ └─ index.js
├─ App.vue
└─ main.js
- `components/` – All pages and reusable components  
- `router/index.js` – Defines routes and protected route guards  
- `assets/` – CSS and JS files  

## **Setup & Run**
1. **Clone the repository**
git clone <repo-url>
cd ticketapp-vue

2. **Install dependencies**
npm install

3. **Run development server**
npm run dev

4. **Open in browser**
http://localhost:5173


**Usage**
Login: /login (valid email: test@example.com, password: password)

Signup: /signup (mocked, data stored in localStorage)

Dashboard: /dashboard (protected route)

Ticket Management: /tickets (create, edit, delete tickets with validation)

**State Management & Components**
Session: Stored in localStorage under key ticketapp_session

Tickets: Stored in localStorage as JSON array

*Components:*
- LandingPage.vue – Hero, features, footer
- SignupPage.vue – Forms with validation
- Dashboard.vue – Stats and navigation
- TicketManagement.vue – CRUD interface
- TicketForm.vue – Create/Edit form
- TicketCard.vue – Ticket display with Edit/Delete buttons

**Accessibility & Responsiveness**
- Semantic HTML and focus states
- Color contrast for readability
- Mobile-first responsive layout
- Max-width: 1440px, horizontally centered content
- Wavy hero section and decorative circles consistent across frameworks

**Test Credentials**
- Email: test@example.com
- Password: password

