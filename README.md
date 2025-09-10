# InsurTech Claims Tracker

A prototype insurance claims tracking application that allows users to submit claims, track progress, and update claim statuses in real time.
This project was built with **React**, **TailwindCSS**, **HTML**, and **JavaScript**.

---

## Features

* Landing page with user/agent login options.
* Dashboard page to view all claims submitted.
* Claim filtering by status: **All, Submitted, In Review, Approved, Rejected**.
* Claim details view with update functionality.
* Search bar to quickly find claims by policy number or incident type.
* Persistent data storage with **localStorage**.
* Mobile-friendly responsive design.

---

## Tech Stack

* **React** – component-based UI
* **TailwindCSS** – styling and responsive design
* **HTML5** – structure
* **JavaScript (ES6+)** – logic and interactivity
* **LocalStorage** – client-side persistence

---

## Project Structure

```
.
├── public/             # Static assets (images, logos)
├── src/
│   ├── assets/         # SVGs and icons
│   ├── components/     # Reusable components (cards, forms, footer, etc.)
│   ├── pages/          # Landing page and dashboard page
│   ├── claimsData.js   # Mock claims data
│   ├── App.jsx         # Main app routes
│   ├── main.jsx        # React entry point
│   └── index.css       # Tailwind base styles
├── package.json
├── vite.config.js
└── README.md
```

---

## Live Demo

[View Project Live](https://molo-m.github.io/insurtech-claims-tracker/)

---

## Screenshots

### Landing Page

![landing page](<landing page.png>)


### Dashboard Page
![dashboard screenshot](<Screenshot 2025-09-10 195937.png>)


## Getting Started

Follow these instructions to run the project locally:

### Prerequisites

* [Node.js](https://nodejs.org/) (v16+ recommended)
* npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Molo-M/insurtech-claims-tracker.git
   cd insurtech-claims-tracker
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open your browser at:

   ```
   http://localhost:5173
   ```

---

## Deployment

This project can be deployed easily to **GitHub Pages**, **Vercel**, or **Netlify**.
For GitHub Pages deployment, use:

```bash
npm run build
```

and push the `dist/` folder to the `gh-pages` branch.

---

## License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---
