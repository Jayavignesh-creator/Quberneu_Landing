# Quberneu Landing Page

A modern landing page built with **React**, **Vite** and **Tailwind CSS**. This boilerplate provides a fast, responsive, and developer-friendly foundation for your next project with a proper React component structure.

## 🚀 Features

- ⚛️ **React Framework** - Built with React for component-based development
- ⚡ **Lightning Fast** - Built with Vite for instant hot reload and optimized builds
- 🎨 **Beautiful Design** - Styled with Tailwind CSS for modern, responsive design
- 💻 **Developer Friendly** - Clean React component structure with modern JavaScript
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🔧 **Ready to Deploy** - Optimized build output ready for production

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Quberneu_Landing
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:3000`

### Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
├── src/
│   ├── components/        # React components
│   │   ├── Navigation.jsx # Navigation component
│   │   ├── Hero.jsx       # Hero section component
│   │   ├── Features.jsx   # Features section component
│   │   └── Footer.jsx     # Footer component
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # React entry point
│   └── style.css         # Tailwind CSS imports
├── index.html            # Main HTML file
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
└── vite.config.js        # Vite configuration with React plugin
```

## 🎨 Customization

### Components

Each section of the landing page is organized into reusable React components:

- **Navigation.jsx** - Top navigation bar with brand and menu items
- **Hero.jsx** - Main hero section with call-to-action buttons
- **Features.jsx** - Features showcase with icons and descriptions
- **Footer.jsx** - Footer with links and branding

### Tailwind CSS

The project uses Tailwind CSS for styling. You can customize the design by:

1. Editing `tailwind.config.js` to add custom colors, fonts, and other design tokens
2. Adding custom components in `src/style.css`
3. Modifying component styles directly in the JSX files

### Adding New Components

Create new components in the `src/components/` directory and import them into `App.jsx` or other components as needed.

## 🚢 Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready to be deployed to any static hosting service.

## 🤝 Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
