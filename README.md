# Yudi Maryadi - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and deployed on Vercel.

## Features

- Clean, minimalist design with modern aesthetics
- Responsive layout for all devices
- Dark/light mode toggle
- Smooth scrolling and transitions
- Professional color scheme
- Component-based architecture
- SEO optimized

## Sections

- Hero section with introduction
- About Me
- Skills (Programming Languages, Libraries, Databases, Tools)
- Experience
- Education
- Projects
- Contact form
- Footer with social links

## Tech Stack

- React 18+
- Tailwind CSS
- React Router
- Framer Motion for animations
- React Hook Form for form handling
- Email.js for contact form functionality

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/yudi-maryadi-portfolio.git
   cd yudi-maryadi-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment on Vercel

### Option 1: Deploy from GitHub

1. Push your code to a GitHub repository
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Configure your project settings:
   - Framework Preset: Create React App
   - Build Command: `npm run build` or `yarn build`
   - Output Directory: `build`
5. Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. Install Vercel CLI
   ```bash
   npm install -g vercel
   # or
   yarn global add vercel
   ```

2. Login to Vercel
   ```bash
   vercel login
   ```

3. Deploy from your project directory
   ```bash
   vercel
   ```

4. Follow the prompts to configure your deployment

### Environment Variables

If you're using EmailJS for the contact form, you'll need to set up the following environment variables in your Vercel project:

- `REACT_APP_EMAILJS_SERVICE_ID`: Your EmailJS service ID
- `REACT_APP_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
- `REACT_APP_EMAILJS_USER_ID`: Your EmailJS user ID

You can set these in the Vercel dashboard under Project Settings > Environment Variables.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── sections/         # Main page sections
├── assets/           # Images, icons, etc.
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── styles/           # Global styles
├── App.js            # Main application component
└── index.js          # Entry point
```

## Customization

### Changing Colors

The color scheme can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3B82F6', // Change this for primary color
        dark: '#2563EB',  // Change this for darker primary color
      },
      secondary: {
        light: '#10B981', // Change this for secondary color
        dark: '#059669',  // Change this for darker secondary color
      },
      // ...
    },
  },
},
```

### Adding Projects

To add new projects, edit the `projects` array in the `src/sections/Projects.js` file:

```js
const projects = [
  {
    title: 'Your New Project',
    description: 'Description of your project',
    tags: ['Frontend', 'Backend'],
    technologies: ['React', 'Node.js', 'MongoDB'],
    image: '/your-project-image.jpg',
    github: 'https://github.com/yourusername/your-project',
    demo: 'https://your-project-demo.com',
  },
  // ...
];
```

## License

MIT
