# Quick Start Guide

## Start the Development Server

```bash
cd /Users/danielarikawe/Desktop/genz-network
pkill -f "next dev"
rm -rf .next
npm run dev
```

Then open: **http://localhost:3000**

---

## What's New

Your landing page now matches the Ford Foundation design with:

### ✅ Design System
- Fluid typography (responsive text sizes)
- CSS custom properties (easy theming)
- Consistent spacing system
- Professional color palette

### ✅ Components

1. **Header** - Rich dropdowns with featured content
2. **Hero** - Full viewport with video background support
3. **Featured Stories** - NEW 50/50 media-text sections
4. **Mission** - 6 priority cards
5. **Objectives** - 10 numbered commitments
6. **Goals** - Programs showcase
7. **Founder** - Tribute section
8. **Footer** - Newsletter + links

---

## Key Features

### Fluid Typography
All text sizes scale responsively:
```css
--gz-font-size-3xl → 3rem to 5.5rem
--gz-font-size-2xl → 2.5rem to 4rem
--gz-font-size-xl → 2rem to 3rem
```

### 50/50 Media-Text Layout
Classic Ford Foundation pattern:
```html
<div class="media-text">
  <div class="media-text-media">Image</div>
  <div class="media-text-content">Content</div>
</div>
```

### Custom Properties
Easy theming:
```css
--gz-teal: #14b8a6;
--gz-gutter: clamp(1.25rem, 2.5vw, 2.5rem);
```

---

## Quick Customization

### Change Colors
Edit [app/globals.css](app/globals.css) around line 30:
```css
--gz-teal: #YOUR_COLOR;
--gz-purple: #YOUR_COLOR;
```

### Add Images
Replace gradient divs in components:
- **Hero**: Line 17 in [Hero.tsx](components/Hero.tsx)
- **Stories**: Line 76 in [FeaturedStories.tsx](components/FeaturedStories.tsx)

### Adjust Spacing
Edit [app/globals.css](app/globals.css) around line 12:
```css
--gz-gutter: clamp(1.5rem, 3vw, 3rem);
```

---

## Utility Classes

### Layout
- `.container-constrained` - Max 1280px with padding
- `.section-padding` - Responsive vertical spacing
- `.media-text` - 50/50 split layout
- `.featured-grid` - Responsive 3-column grid

### Buttons
- `.btn .btn-primary` - Teal button
- `.btn .btn-outline` - Outline button
- `.btn .btn-outline-light` - Light outline (dark backgrounds)

### Typography
- `.text-fluid-3xl` to `.text-fluid-sm` - Responsive text sizes

---

## Troubleshooting

### Server Won't Start
```bash
pkill -f "next dev"
rm -rf .next node_modules/.cache
npm install
npm run dev
```

### Tailwind Not Working
```bash
npm install -D tailwindcss postcss autoprefixer
```

### Port Already in Use
```bash
lsof -ti:3000 | xargs kill -9
```

---

## Documentation

- **This File**: Quick reference
- **[INSTALLATION.md](INSTALLATION.md)**: Detailed setup
- **[REDESIGN-SUMMARY.md](REDESIGN-SUMMARY.md)**: Complete overview
- **[DEVELOPMENT.md](DEVELOPMENT.md)**: Development guide
- **[README.md](README.md)**: Project overview

---

## Next Steps

1. ✅ Start server: `npm run dev`
2. ⏳ Review design at http://localhost:3000
3. ⏳ Add real images
4. ⏳ Customize colors/content
5. ⏳ Deploy to Vercel

---

**Ready to go!** 🚀
