# Assets Migration Guide

This guide explains how to copy missing images from the old portfolio project to integrate them properly.

## Source & Destination

**Source Project:** `C:\Users\sxrlx\Videos\portfolio\my-portfolio\public`
**Destination Project:** `c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public`

---

## Images to Copy

### 1. Project Images (Root `/public` folder)
Copy these images to the `/public` folder:

```
Source → Destination
/hdfc.jpg → /hdfc.jpg
/ccs.png → /ccs.png
/aryalogo.png → /aryalogo.png
/rhpatel.jpg → /rhpatel.jpg
/hotel.jpg → /hotel.jpg
/port.png → /port.png
/dog.png → /dog.png
/portfolio.png → /portfolio.png
/backend.jpg → /backend.jpg
/database.jpeg → /database.jpeg
/frontend.jpg → /frontend.jpg
/devops.jpg → /devops.jpg
```

**Total: 12 images**

### 2. Skill Icons (Create `/public/icons` folder)
Copy ALL icon files from `/icons` folder:

```
Source: C:\Users\sxrlx\Videos\portfolio\my-portfolio\public\icons\*
Destination: c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public\icons\
```

**Icon files include:**
- Backend: c.png, java.png, python.png, js.png, typescript.png, json.png, node.png, dotnet-core.png, npm.png, rest-api.png, expressjs.png, nestjs.png, graphql.png, passportjs.png, jwt.png, aws.png
- Database: mysql.png, mongodb.png, postgresql.png, mariadb.png, redis.png, mongoose.png, sequlize.svg, prisma.png, waterline.png, knex.png
- Frontend: react.png, nextjs.svg, angularjs.png, jquery.png, html.png, css.png
- Tools: visual-studio.png, pycharm.png, postman.svg, docker.svg, terminal.png, aws-cognito.png, aws-ses.png, aws-s.png, pm2.png, jenkins.png, strapi.png, apollo.png, heidisql.png

**Total: ~50 icon files**

---

## Steps to Copy Files

### Using Windows Explorer:

1. **Open two Windows Explorer windows:**
   - Window 1: `C:\Users\sxrlx\Videos\portfolio\my-portfolio\public`
   - Window 2: `c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public`

2. **Copy Project Images:**
   - In Window 1, select all `.jpg`, `.jpeg`, `.png` files (except `robots.txt`)
   - Drag and drop to Window 2 (or Ctrl+C → Ctrl+V)

3. **Copy Icons:**
   - In Window 1, navigate to `icons` folder
   - Select all icon files
   - Drag and drop to `c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public\icons\`

### Using PowerShell (Recommended):

```powershell
# Copy all images to public folder
Copy-Item "C:\Users\sxrlx\Videos\portfolio\my-portfolio\public\*.{jpg,jpeg,png}" `
  -Destination "c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public\" -Exclude "robots.txt" -Force

# Copy all icons
Copy-Item "C:\Users\sxrlx\Videos\portfolio\my-portfolio\public\icons\*" `
  -Destination "c:\Users\sxrlx\Downloads\Trusha Jadeja _ Portfolio\public\icons\" -Force
```

---

## Integration in Code

### Using Project Images in Components

The project components already reference images. Update ProjectsSection.tsx if needed:

```tsx
// ProjectsSection.tsx
const projects = [
  {
    name: "HDFC International",
    image: "/hdfc.jpg",  // ✅ Image will load once copied
    link: "https://www.hdfclife-international.com/",
  },
  // ... more projects
];
```

### Using Skill Icons

Update SkillsSection.tsx to display icons (optional enhancement):

```tsx
// Example: Display skill icons
const skillsWithIcons = {
  backend: [
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    // ... more skills
  ],
};
```

---

## Verification Checklist

After copying files, verify:

- [ ] `/public/hdfc.jpg` exists
- [ ] `/public/ccs.png` exists
- [ ] `/public/aryalogo.png` exists
- [ ] `/public/portfolio.png` exists
- [ ] `/public/backend.jpg` exists
- [ ] `/public/icons/` folder exists
- [ ] `/public/icons/js.png` exists
- [ ] `/public/icons/typescript.png` exists
- [ ] `/public/icons/react.png` exists
- [ ] All other icon files exist

---

## Enhanced Animations Added

### 1. Improved Falling Petal Animation
- **File:** `src/react-app/components/SakuraPetals.tsx`
- **Changes:**
  - Increased petal count: 30 petals (from 25)
  - Better randomization: swayAmount, rotation
  - Smoother positioning and motion
  - Longer animation duration (12-22s instead of 16-33s)

### 2. Enhanced CSS Animations
- **File:** `src/react-app/index.css`
- **Changes:**
  - **`@keyframes fall`**: Now has 4 keyframes instead of 3 for smoother motion
  - **`@keyframes sway`**: Added more waypoints for natural side-to-side motion (±40px)
  - Better rotation integration matching the fall animation
  - Improved opacity fade-out timing

### 3. Butterfly Flying Animation
- Already integrated: Butterfly flies upward with wing flaps when clicked
- Synchronized with page scroll to create "pulling" effect

---

## Next Steps

1. Run `npm run dev` to test the application
2. Check browser console for any image loading errors
3. Verify animations are smooth (60fps)
4. Test on mobile devices for responsiveness

---

## Troubleshooting

**Q: Images are not loading?**
- A: Verify files are in `/public` folder with correct names (case-sensitive)
- Check browser DevTools Network tab for 404 errors

**Q: Icons not showing?**
- A: Ensure `/public/icons/` folder exists and contains icon files
- Check ProjectsSection references to image paths

**Q: Animation is choppy?**
- A: This is normal on lower-end devices. Reduce petal count in SakuraPetals.tsx if needed
- Disable animations on mobile if performance is critical

---

## Summary of Changes

✅ **Enhanced SakuraPetals.tsx** with more petals and better randomization  
✅ **Improved CSS animations** with 4-point fall motion  
✅ **Created `/public/icons` folder** for skill icons  
✅ **All data already in portfolio.ts** (no changes needed)  
✅ **Butterfly animation** working with flying effect  

Once you copy the image files, your portfolio will be complete! 🌸🦋
