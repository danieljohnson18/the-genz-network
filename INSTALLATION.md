# Installation & Setup Guide

## Current Status

Your Gen Z Network landing page has been completely redesigned to match the Ford Foundation aesthetic with:

- ✅ Fluid typography using CSS `clamp()`
- ✅ CSS custom properties for colors and spacing
- ✅ Rich navigation dropdowns with featured content
- ✅ 50/50 media-text layouts
- ✅ Sophisticated card grids
- ✅ Ford Foundation-inspired design system

## Quick Start

### Step 1: Stop Any Running Processes

```bash
# Kill any running Next.js servers
pkill -f "next dev"

# Or find and kill manually
lsof -ti:3000 | xargs kill -9
lsof -ti:54112 | xargs kill -9
```

### Step 2: Clean Build Cache

```bash
cd /Users/danielarikawe/Desktop/genz-network
rm -rf .next node_modules/.cache
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

The site should now be running at `http://localhost:3000`

## If You Still Have Issues

### Option 1: Fresh Install

```bash
# Remove all dependencies
rm -rf node_modules package-lock.json .next

# Reinstall
npm install

# Start server
npm run dev
```

### Option 2: Check PostCSS Configuration

Make sure you have `postcss.config.js` (not `.mjs`) with:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Option 3: Verify Dependencies

Check that these are installed:

```bash
npm list tailwindcss postcss autoprefixer
```

If any are missing:

```bash
npm install -D tailwindcss postcss autoprefixer
```

## New Design System

### CSS Custom Properties

All design tokens are now in CSS variables:

- **Typography**: `--gz-font-size-*` (small, base, medium, large, xl, 2xl, 3xl)
- **Colors**: `--gz-teal`, `--gz-sky`, `--gz-purple`, `--gz-pink`, `--gz-orange`
- **Spacing**: `--gz-gutter`, `--gz-section-padding`
- **Layout**: `--gz-content-width` (1280px), `--gz-wide-width` (1440px)

### Utility Classes

- `.container-constrained` - Max width with padding
- `.container-wide` - Wider max width
- `.section-padding` - Vertical section padding
- `.media-text` - 50/50 split layout
- `.featured-grid` - Responsive 3-column grid
- `.btn` - Button base styles
- `.text-fluid-*` - Fluid typography sizes

### Button Styles

- `.btn-primary` - Teal background
- `.btn-outline` - Dark outline
- `.btn-outline-light` - Light outline (for dark backgrounds)

## Component Overview

### Updated Components:

1. **Header** - Rich dropdowns with featured content
2. **Hero** - Full viewport with scroll indicator
3. **FeaturedStories** - NEW - 50/50 media-text sections
4. **MissionSection** - 6 priority cards
5. **ObjectivesSection** - 10 commitments grid
6. **GoalsSection** - Programs showcase
7. **FounderSection** - Founder tribute
8. **Footer** - Newsletter + links

## Customization

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --gz-teal: #14b8a6;  /* Change to your color */
  --gz-purple: #a855f7;
  /* etc... */
}
```

### Add Images

Replace gradient placeholders:

1. **Hero**: Edit `components/Hero.tsx` line 17-27
2. **Featured Stories**: Edit `components/FeaturedStories.tsx` line 76
3. **Mission Cards**: Already using solid colors
4. **Founder**: Edit `components/FounderSection.tsx`

### Adjust Spacing

Change in `app/globals.css`:

```css
--gz-gutter: clamp(1.25rem, 2.5vw, 2.5rem);
--gz-section-padding: clamp(3rem, 8vw, 8rem);
```

## Typography

The design uses system fonts:

- **Headings**: `ui-sans-serif` (similar to Good Sans)
- **Body**: `ui-serif` (similar to Domaine)
- **UI Elements**: `ui-sans-serif`

All sizes are fluid using `clamp()` for responsive scaling.

## Known Issues & Solutions

### Issue: PostCSS errors
**Solution**: Ensure `postcss.config.js` exists (not `.mjs`)

### Issue: Tailwind not processing
**Solution**: Run `npm install -D tailwindcss@latest postcss@latest autoprefixer@latest`

### Issue: Port already in use
**Solution**: `pkill -f "next dev"` then restart

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Fluid typography scales automatically
- CSS custom properties for easy theming
- Animations use GPU-accelerated transforms
- Lazy loading with `viewport={{ once: true }}`

## Next Steps

1. ✅ Start the dev server
2. Add real images to replace gradients
3. Connect newsletter to email service
4. Add social media URLs
5. Customize colors if needed
6. Deploy to Vercel

---

**Need Help?**

Check the main [README.md](README.md) and [DEVELOPMENT.md](DEVELOPMENT.md) for more details.
