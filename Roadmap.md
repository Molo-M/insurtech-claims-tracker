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



