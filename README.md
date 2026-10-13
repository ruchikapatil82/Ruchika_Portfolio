# Ruchika Dilip Patil — Developer Portfolio 🚀

A modern, high-impact developer portfolio website inspired by **Linear** and **Vercel**, featuring a **Bento Grid** layout, dark/light theme switching, and smooth **Framer Motion** animations.

Built with **React 19**, **Vite**, **Custom Bento Design System**, and **Lucide Icons**.

---

## 🌟 Key Features

1. **Modern Bento Grid Layout**: Linear & Vercel-inspired cards with glowing borders, ambient violet/pink lighting, and smooth glassmorphism.
2. **Light & Dark Mode**: Persistent theme toggle with stored preference in `localStorage`.
3. **Hero Section**:
   - Status beacon: *"Open to Full Stack & React Opportunities"*.
   - Stylized 3D Developer graphic & animated mini-terminal snippet.
   - Quick CTAs: *Explore Projects*, *Download Resume*, and *Get in Touch*.
4. **Verified Skills Matrix**:
   - Interactive category tabs (*Frontend*, *Backend*, *Languages*, *Databases*, *Tools*).
   - Dedicated badge for **Figma** marked as `[Learning UI/UX Design]`.
5. **Featured Projects**:
   - **Museum Website** (Full Stack / MERN stack).
   - **OBE Attainment Management System** (Python, Django, SQLite, Pandas — [GitHub](https://github.com/Amansk101/co)).
   - **VaultNest Password Manager** (Python, Flask, Werkzeug, SQLite — [GitHub](https://github.com/ruchikapatil82/VaultNest)).
   - **Student Attendance Management System** (Python, Tkinter, SQLite3).
6. **Internship Experience Spotlight**:
   - Detailed milestone card for **Sumago Infotech** (Full Stack Development Intern - React/MERN).
   - Recognitions: *Best Performer of the Month*, *Curious Catalyst Valedictory Award*, *Internship Certificate*.
7. **Education & Achievements Grid**:
   - **R.C. Patel Institute of Technology (RCPIT)** — Direct Second Year B.E. in Computer Engineering with **90.35%** merit score.
   - 7 verified certificates and awards with distinct icon cards.
8. **Interactive Contact Form & Socials**:
   - Validated message form with confetti fireworks celebration on submit (`canvas-confetti`).
   - One-click **Copy Email** button with floating toast notification.
   - Direct links to GitHub and LinkedIn.
9. **Interactive Resume Modal**:
   - View structured summary or directly trigger PDF download (`/public/resume.pdf`).

---

## 📂 Project Structure

```
d:\PortFolix\
├── public/
│   ├── favicon.svg
│   └── resume.pdf                 <-- Drop your updated PDF resume here
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── BrandIcons.jsx         <-- Crisp SVG icons (GitHub, LinkedIn, Figma)
│   │   ├── Navbar.jsx             <-- Sticky glass navbar & mobile drawer
│   │   ├── Hero.jsx               <-- Bento Hero & 3D avatar card
│   │   ├── About.jsx              <-- Story, RCPIT education & principles
│   │   ├── Skills.jsx             <-- Filterable verified skills matrix
│   │   ├── Projects.jsx           <-- Bento project cards & detail modal
│   │   ├── Experience.jsx         <-- Sumago Infotech internship spotlight
│   │   ├── EducationAndAchievements.jsx <-- RCPIT merit & 7 awards
│   │   ├── Contact.jsx            <-- Working form, confetti, copy email
│   │   ├── Footer.jsx             <-- Footer with back-to-top
│   │   └── ResumeModal.jsx        <-- Resume modal & PDF download
│   ├── data/
│   │   └── portfolioData.js       <-- ⚡ Central config file to edit any detail!
│   ├── App.jsx                    <-- Main app assembly
│   ├── index.css                  <-- Custom Bento CSS design system
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

---

## 🛠️ How to Customize Your Details

All personal information, links, and content are centralized in a single file:
👉 **[src/data/portfolioData.js](file:///d:/PortFolix/src/data/portfolioData.js)**

- **Update Email:** Change `email: "ruchikapatil82@gmail.com"`
- **Update LinkedIn URL:** Change `linkedin: "https://www.linkedin.com/in/ruchika-patil"`
- **Update Resume Link:** Place your PDF in `public/resume.pdf` or paste a Google Drive link in `resumeUrl`.
- **Add Projects:** Add new entries directly to the `projects` array.

---

## 🚀 Running the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
```
Creates optimized static production assets in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Free One-Click Deployment

### Deploy to Vercel (Recommended):
1. Push this repository to GitHub: `https://github.com/ruchikapatil82/PortFolix`
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your `PortFolix` repository.
4. Click **Deploy**! (Vercel automatically detects Vite and deploys in ~30 seconds with a free `.vercel.app` domain and free SSL).
