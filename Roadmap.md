# 🚀 Roadmap for InsurTech Claims Tracker (Front-End Project)

---

## **Phase 1 — MVP (Core Usability)**

🎯 Goal: Have a working prototype that looks clean and demonstrates the idea.

* **Landing Page**

  * Simple description of the app + “Login as User” or “Login as Agent” (mock).

* **Claim Submission Form**

  * Form fields: policy number, incident type, date, description.
  * Upload simulation: allow attaching images/files (no real backend yet, just store locally).

* **Claims Dashboard**

  * List of claims in a grid or card layout.
  * Status badge: *Submitted* by default.
  * Filter/search by status (basic).

---

## **Phase 2 — UX Polish**

🎯 Goal: Improve user experience, show recruiters you care about design.

* **Responsive UI** (TailwindCSS, mobile-first).
* **Hover & Active States** for buttons/cards.
* **Framer Motion Animations** when submitting a new claim or updating status.
* **Reusable Components** (ClaimCard, StatusBadge, ClaimForm).

---

## **Phase 3 — Tracking & Status**

🎯 Goal: Make it feel like a real claims app.

* **Claim Details Page**

  * Show a single claim with incident info + uploaded docs.
  * Display a **status timeline** (Submitted → In Review → Approved/Rejected).

* **Update Status Simulation**

  * If logged in as “Agent,” allow updating claim status.
  * If logged in as “User,” status is read-only.

---

## **Phase 4 — Analytics & Insights**

🎯 Goal: Impress with dashboards & data viz.

* **Analytics Page (for Agent role)**

  * Pie chart of claims by type (car, health, property).
  * Bar chart of claims by status (approved, rejected, pending).
  * Line chart of claims submitted over time.

* **KPIs**: Show total claims, approval rate, average processing time (mocked).

---

## **Phase 5 — Advanced Recruiter-Ready Extras**

🎯 Goal: Look like a SaaS product demo.

* **Authentication Mock**

  * Simple login/logout (hardcoded users or mock JWT).
  * Role-based access (User vs Agent).

* **Notifications**

  * Toast when claim is submitted.
  * Alert when a claim requires more documents.

* **Dark Mode** toggle (Tailwind).

* **Deploy on GitHub Pages / Vercel** + nice README with screenshots.

---

# 📌 Recruiter Checklist

✅ MVP live demo link
✅ Screenshot in README
✅ Clean, responsive UI
✅ Claims tracking timeline
✅ Charts & data viz
✅ “Wow” features: role simulation, notifications, dark mode

---

👉 With this roadmap, you can stop at **Phase 2 or 3** for a strong project, or push to **Phase 5** to make it portfolio-killer.


---

## 🔹 Phase 1 — MVP (Core Usability)

🎯 **Goal:** Build a working prototype that is clean, functional, and demonstrates the claims-tracking idea. Keep things simple but polished.

---

### **1. Project Setup**

* **Tech stack**:

  * React (main framework)
  * TailwindCSS (styling)
  * React Router (for navigation: Landing → Dashboard → Claim Details)
  * Local Storage or React State (to store mock claims temporarily, no backend yet)

* **Folder structure** (starter):

  ```
  src/
    components/   → ClaimForm, ClaimCard, Navbar, Footer, etc.
    pages/        → LandingPage, DashboardPage, ClaimDetailsPage
    data/         → mockClaims.js (seed data for testing)
    assets/       → icons/images (placeholders for uploads, logos)
    App.jsx
    index.jsx
  ```

---

### **2. Landing Page**

* Clean hero section: App logo + tagline (“Track your claims with ease”).
* Two buttons: **Login as User** | **Login as Agent** (mock only → just set a role in state).
* Redirect to Dashboard after clicking a role.

---

### **3. Claim Submission Form**

* Accessible from Dashboard: “+ New Claim” button opens a form modal OR a separate page.
* Fields:

  * Policy number (text input)
  * Incident type (select dropdown: Car, Health, Property, Other)
  * Date (date picker)
  * Description (textarea)
* File upload (mock):

  * Allow uploading images/docs but don’t store real files → just show file names or thumbnails in state.

---

### **4. Claims Dashboard**

* Grid or card layout: each claim shown in a **ClaimCard component**.

  * Policy number
  * Type
  * Date
  * Status badge (default: Submitted)
* Add simple **filter/search**:

  * Dropdown: “All / Submitted / Approved / Rejected”
  * Search bar for policy number

---

### **5. Data Handling (Mock)**

* Use React `useState` or `useReducer` to store claims locally.
* When a new claim is submitted, push it into the claims array.
* Each claim object might look like this:

  ```js
  {
    id: 1,
    policyNumber: "PN-12345",
    incidentType: "Car",
    date: "2025-08-18",
    description: "Minor accident on highway",
    files: ["accident.jpg"],
    status: "Submitted"
  }
  ```

---

### **6. Styling (Tailwind)**

* Responsive grid for claims (mobile: 1 column, desktop: 3 columns).
* Buttons: rounded, hover states.
* Status badges:

  * Submitted → gray
  * Approved → green
  * Rejected → red

---

### **7. Navigation**

* Navbar (top): Logo + “Dashboard” + “Submit Claim” + role indicator (User/Agent).
* Footer (bottom): Just a placeholder with © year.

---

✅ **Deliverable for Phase 1:**

* A working React app where you can:

  * Log in as User/Agent (mock).
  * Submit claims via a form.
  * See claims listed on the dashboard.
  * Filter claims by status.
  * Upload mock files (names/thumbnails shown).
* Looks clean & responsive enough to demo.

---



