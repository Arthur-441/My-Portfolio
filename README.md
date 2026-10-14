# Arthur Lubowa Shalom - Personal Portfolio & Online CV

A modern, minimal, and professional personal portfolio website and online CV designed for **Arthur Lubowa Shalom**, a first-year university student at Uganda Christian University (UCU) studying Data Science and Analytics.

---

## 🌟 Key Features

- **Honest Beginner Presentation**: Highlights authentic academic foundations and learning mindset without fabricated professional achievements, inflated skill percentages, or fake work experience.
- **Modern Minimal Design**: Crisp white background, dark navy typography, subtle blue accents, and generous whitespace adhering to strict anti-slop guidelines.
- **Pure Presentation**: No input fields or in-website edit forms. All content is cleanly structured in code.
- **6 Core Sections**:
  1. **Home**: Clear personal introduction with responsive student portrait and scroll buttons.
  2. **About Me**: Motivated, curious student mindset emphasizing teamwork, communication, and continuous learning.
  3. **Skills**: Clean technical and personal categories without fake progress bars or percentages.
  4. **Education Timeline**: Verified timeline covering Uganda Christian University, Light Academy, and Mengo Senior School.
  5. **Academic Goals**: Clear four-pillar development plan for undergraduate growth.
  6. **Contact**: Direct email communication with one-click copy, verified details only (unconfigured profiles remain hidden).
- **Print / Save CV**: Built-in print stylesheet to instantly save a clean PDF resume using the browser print dialog (`Ctrl + P` / `Cmd + P`).

---

## 🛠️ How to Edit Content

All portfolio text and information are located in a single file:

### File: `src/data/portfolio.ts`

Open `src/data/portfolio.ts` in your code editor to edit any detail:

- **Personal Details**: Update `fullName`, `headline`, `status`, or `heroIntro`.
- **Photo**: Place your photo in `src/assets/images/` and update `avatarUrl`.
- **Skills**: Add or adjust items under `skills.technical` and `skills.personal`.
- **Education**: Add or update entries under `education: [...]` (e.g. updating from *Semester 1* to *Semester 2*).
- **Contact Details**: 
  - Update `contact.email`
  - Enter your GitHub profile in `contact.githubUsername` once created (it will automatically show up once filled).
  - Unfilled fields remain hidden from the website.

---

## 💻 Local Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
This produces an optimized production build in the `dist` folder.

---

## 🚀 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this repository to your GitHub account.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and import your repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your portfolio will be live in under 1 minute.

### Deploy to Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Choose **"Import from Git"**.
3. Set Build command to `npm run build` and Publish directory to `dist`.
4. Click **"Deploy site"**.

### Deploy to GitHub Pages
1. In `vite.config.ts`, set `base: '/<repository-name>/'` (if using project pages).
2. Run `npm run build`.
3. Deploy the `dist` folder using the GitHub Actions Pages workflow.

---

## 📄 License & Attribution
Designed for Arthur Lubowa Shalom. All rights reserved.
