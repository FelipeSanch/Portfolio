# Next Steps - Portfolio Setup

## Immediate Actions

### 1. Update GitHub Username
Search and replace `YOUR_GITHUB_USERNAME` with your actual GitHub username in:
- `src/components/Hero.tsx` (line 77)
- `src/components/Projects.tsx` (lines 17, 33, 147)
- `src/components/Contact.tsx` (line 26-27)
- `src/components/Footer.tsx` (line 40)

**Quick Find & Replace:**
- Press `Cmd+Shift+F` (Mac) or `Ctrl+Shift+H` (Windows/Linux)
- Find: `YOUR_GITHUB_USERNAME`
- Replace: `your-actual-username`

### 2. Add Your Professional Photo
- Take or use a professional headshot (clean background, professional attire)
- Save as `profile.jpg` or `profile.png` in `/public` folder
- Update `src/components/Hero.tsx` line 20-29 to use your image:
  ```tsx
  <img src="/profile.jpg" alt="Felipe Sanchez" className="w-full h-full rounded-2xl object-cover" />
  ```

### 3. Add Your Resume
- Save your resume PDF as `/public/resume.pdf`
- The download link is already configured in Hero and Navbar

### 4. Add Project Screenshots
- Create screenshots or GIFs of your projects
- Save in `/public/projects/` folder
- Update `src/components/Projects.tsx` to include images

## Optional Enhancements

### Add Project Images
Replace the placeholder in `Projects.tsx` (around line 62-68):
```tsx
<img 
  src="/projects/gitflow-screenshot.png" 
  alt="GitFlow Dashboard"
  className="w-full h-full object-cover rounded-xl"
/>
```

### Customize Colors
Edit `tailwind.config.js` to change the blue/purple theme to your preference.

### Add Google Analytics
Add tracking code to `index.html` for visitor analytics.

## Testing Before Deploy

1. **Install and run locally:**
   ```bash
   npm install
   npm run dev
   ```

2. **Test on different devices:**
   - Desktop (Chrome, Firefox, Safari)
   - Mobile (responsive mode in dev tools)
   - Tablet (iPad size)

3. **Check all links work:**
   - Email link
   - Phone link
   - LinkedIn link
   - GitHub link
   - Resume download
   - Smooth scrolling navigation

4. **Verify content:**
   - No typos
   - All dates correct
   - All achievements accurate
   - Contact info correct

## Deployment

### Option 1: Vercel (Easiest)
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Import your repository
5. Click Deploy (all settings auto-detected)
6. Get your live URL

### Option 2: Netlify
1. Push code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

## After Deployment

1. **Test live site** on all devices
2. **Share URL** with friends for feedback
3. **Add to resume** under "Portfolio" or header
4. **Add to LinkedIn** in "Featured" or "About" section
5. **Include in applications** with your resume

## Git Commits (Simple, No Emoji)

When you commit, use simple messages:
```bash
git add .
git commit -m "Initial portfolio setup"
git commit -m "Update project information"
git commit -m "Add professional photo"
git commit -m "Fix responsive layout"
```

## Support

If you need to update content:
- **Experience**: Edit `src/components/Experience.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Skills**: Edit `src/components/Skills.tsx`
- **Contact**: Edit `src/components/Contact.tsx`

Good luck with your internship applications!

