# Felipe Sanchez - Portfolio Website

A sophisticated, professional portfolio website showcasing my experience, projects, and skills as a Computer Science & Mathematics student at Duke University. Built with modern web technologies and designed to impress recruiters, grad schools, and networking contacts.

## Features

### Professional Design
- **Sophisticated UI** with gradient accents and smooth animations
- **Fully responsive** layout optimized for desktop, tablet, and mobile
- **Fast performance** with optimized loading and smooth transitions
- **Accessible** with proper contrast and semantic HTML

### Comprehensive Sections
- **Hero Section**: Professional photo placeholder, intro, resume download, and social links
- **About**: Education background, professional approach, and personal interests
- **Experience**: Timeline-style layout with internships and leadership roles
- **Projects**: Featured project showcase with detailed descriptions and tech stacks
- **Skills**: Categorized technical skills with visual icons
- **Leadership**: Community impact with quantifiable metrics
- **Contact**: Multiple contact methods and opportunity areas

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Professional icons

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

## Before Deploying

### Required Updates
1. Replace `YOUR_GITHUB_USERNAME` with your GitHub username in:
   - `src/components/Hero.tsx`
   - `src/components/Projects.tsx`
   - `src/components/Contact.tsx`
   - `src/components/Footer.tsx`

2. Add your professional photo to `/public` and update the image path in `Hero.tsx`

3. Add your resume PDF to `/public/resume.pdf`

4. Update project screenshots in the `Projects` component

### Optional Customizations
- Update project URLs and live demo links
- Customize color scheme in `tailwind.config.js`
- Add Google Analytics tracking code

## Deployment

### Vercel (Recommended)
```bash
# Push to GitHub, then:
# 1. Visit vercel.com
# 2. Import your repository
# 3. Deploy automatically
```

### Netlify
```bash
# Push to GitHub, then:
# 1. Visit netlify.com
# 2. Connect repository
# 3. Build: npm run build
# 4. Publish: dist/
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx       # Sticky navigation with resume button
│   ├── Hero.tsx         # Landing section with photo
│   ├── About.tsx        # Education and professional values
│   ├── Experience.tsx   # Timeline-based experience
│   ├── Projects.tsx     # Featured project showcase
│   ├── Skills.tsx       # Categorized technical skills
│   ├── Leadership.tsx   # Leadership and impact metrics
│   ├── Contact.tsx      # Contact information and CTA
│   └── Footer.tsx       # Footer with social links
├── App.tsx
├── main.tsx
└── index.css
```

## Key Features for Recruiters

- **Resume Download**: Easily accessible from hero and navigation
- **Project Details**: Tech stack, role, and measurable impact for each project
- **Quantifiable Results**: $15K+ raised, 200K+ bottle caps, multiple awards
- **Diverse Experience**: Software engineering, finance, VC, and community leadership
- **Technical Depth**: Full-stack, ML, data analytics, and DevOps skills

## Contact

**Felipe Sanchez**
- Email: fs172@duke.edu
- Phone: (786) 383-6873
- LinkedIn: [linkedin.com/in/felipesanchez-noguera](https://linkedin.com/in/felipesanchez-noguera)
- Location: Miami, FL

Actively seeking SWE internship opportunities for Summer 2026.

