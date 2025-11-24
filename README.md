# CodeNova - Fully Responsive Landing Page

A modern, fully responsive landing page built with React and Tailwind CSS. This project features a beautiful UI with smooth animations, mobile-first design, and optimized performance.

## 🚀 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop devices
- **Modern UI/UX** - Beautiful gradient effects, smooth transitions, and hover states
- **Performance Optimized** - Built with Vite for fast development and production builds
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **React 19** - Latest React features with React Compiler enabled
- **Smooth Scrolling** - Enhanced user experience with smooth scroll behavior
- **Mobile Navigation** - Responsive mobile menu with smooth animations

## 📦 Installation

```bash
# Install dependencies
npm install
```

## 🛠️ Development

```bash
# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 🏗️ Build for Production

```bash
# Build for production
npm run build
```

The production-ready files will be in the `dist` directory.

## 📱 Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## 🚢 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install `gh-pages`:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📂 Project Structure

```
codenovaai/
├── src/
│   ├── components/      # React components
│   │   ├── Navbar.jsx
│   │   ├── HeroSection.jsx
│   │   ├── FeatureSection.jsx
│   │   ├── Workflow.jsx
│   │   ├── Pricing.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── assets/          # Images, videos, and other assets
│   ├── constants/       # Data constants
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
└── vite.config.js       # Vite configuration
```

## 🎨 Customization

- **Colors**: Modify gradient colors in components (orange-500, orange-800, etc.)
- **Content**: Update text and data in `src/constants/index.jsx`
- **Styling**: Customize Tailwind classes in components or add custom CSS in `index.css`

## 📝 Technologies Used

- React 19
- Vite
- Tailwind CSS 4
- Lucide React (Icons)
- React Compiler

## 📄 License

This project is open source and available for use.

---

Built with ❤️ using React + Tailwind CSS
