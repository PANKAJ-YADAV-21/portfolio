# Pankaj Yadav — Portfolio

A modern, dark-themed React portfolio website for Pankaj Yadav, Full Stack Developer.

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or above)
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will run at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🌐 Deployment

You can deploy the `build/` folder to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop the `build/` folder
- **Render**: Connect your GitHub repo and set build command to `npm run build`
- **GitHub Pages**: Use `gh-pages` package

## 🎨 Tech Stack

- React 18
- Pure CSS (no external UI libraries)
- Google Fonts (Syne + DM Sans)
- IntersectionObserver for scroll animations

## 📁 Structure

```
src/
  App.js       — All sections + components
  index.js     — React entry point
  index.css    — Global styles & animations
public/
  index.html   — HTML template
```

## ✏️ Customization

All content is in the **DATA** section at the top of `src/App.js`. Edit the arrays/objects to update skills, projects, certificates, etc.
