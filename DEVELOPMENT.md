# Development Guide

## Getting Started

Your Gen Z Network landing page is now ready! The development server is currently running at:

**http://localhost:54112**

## Quick Commands

```bash
# Start development server
npm run dev

# Build for production (Note: There's a known build issue - use dev mode for now)
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Overview

### Built With

- **Next.js 14.2.18** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **shadcn/ui** - UI components
- **Lucide React** - Icons

### Key Features Implemented

1. **Sticky Navigation Header**
   - Transparent on scroll top, solid white when scrolled
   - Dropdown menus on desktop
   - Mobile hamburger menu
   - Smooth animations

2. **Hero Section**
   - Full-screen height
   - Animated gradient background (placeholder for video)
   - Animated text and CTAs
   - Scroll indicator

3. **Mission Section**
   - 4 mission cards with icons
   - Staggered animations
   - "Because I Exist" statement card

4. **Objectives Grid**
   - 10 objectives in a responsive grid
   - Hover animations
   - Icon gradients

5. **Goals & Initiatives**
   - 6 main goal cards with gradient placeholders
   - 4 additional initiative badges
   - Card hover effects

6. **Founder Section**
   - Split layout (image/content)
   - Quote section
   - Pledge card

7. **Footer**
   - Newsletter signup
   - Multiple link columns
   - Social media links
   - Responsive layout

## Customization Guide

### 1. Adding a Video Background

Replace the gradient in [components/Hero.tsx](components/Hero.tsx):

1. Add your video to `public/videos/hero-video.mp4`
2. Uncomment lines 21-27 in Hero.tsx
3. The video will autoplay, loop, and be muted

### 2. Adding Real Images

**Founder Image:**
- Edit [components/FounderSection.tsx](components/FounderSection.tsx)
- Replace the gradient div (lines 14-29) with:
```tsx
<img
  src="/images/founder.jpg"
  alt="Gift Chinonso Agodi"
  className="w-full h-full object-cover"
/>
```

**Goal Cards:**
- Edit [components/GoalsSection.tsx](components/GoalsSection.tsx)
- Replace the gradient div in each card with actual images

### 3. Customizing Colors

The main color scheme uses:
- **Primary:** Teal (teal-500, teal-600)
- **Secondary:** Blue (blue-500, blue-600)
- **Accents:** Purple, Pink, Orange, Amber

To change colors, update the gradient classes in:
- [tailwind.config.ts](tailwind.config.ts) - for global colors
- Component files - for specific gradient combinations

### 4. Adding Social Media Links

Edit [components/Footer.tsx](components/Footer.tsx) around line 49:

```tsx
const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/yourpage", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/yourhandle", label: "Instagram" },
  // ... add your actual links
];
```

### 5. Newsletter Integration

Edit [components/Footer.tsx](components/Footer.tsx) around line 73.

Add form submission handler:
```tsx
const handleNewsletterSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add your email service integration (Mailchimp, SendGrid, etc.)
};
```

## File Structure

```
genz-network/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Global styles & CSS variables
├── components/
│   ├── ui/                 # shadcn UI primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── Header.tsx          # Top navigation
│   ├── Hero.tsx            # Hero section
│   ├── MissionSection.tsx  # Mission cards
│   ├── ObjectivesSection.tsx # 10 objectives grid
│   ├── GoalsSection.tsx    # Goals & initiatives
│   ├── FounderSection.tsx  # Founder tribute
│   └── Footer.tsx          # Footer with newsletter
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
└── public/
    └── videos/             # Video assets directory
```

## Animation Details

All animations use Framer Motion for smooth, performant effects:

- **Scroll-triggered animations:** `whileInView` with `viewport={{ once: true }}`
- **Stagger effects:** Container/item variants pattern
- **Hover states:** `whileHover` for interactive elements
- **Page load:** Initial opacity/position animations

## Responsive Breakpoints

Tailwind CSS breakpoints used:
- `sm`: 640px (mobile landscape)
- `md`: 768px (tablet)
- `lg`: 1024px (desktop)
- `xl`: 1280px (large desktop)

## Performance Tips

1. **Images:** Use Next.js Image component for optimization
2. **Lazy Loading:** Components use `viewport={{ once: true }}` to prevent re-animation
3. **Code Splitting:** Next.js automatically code-splits by route

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

Note: There's currently a build issue with the crypto module. For production, you may need to:
1. Use Node.js 18 or lower
2. Or deploy using development mode for now

## Troubleshooting

**Issue: Build fails with "generate is not a function"**
- This is a known issue with certain Node versions
- Use `npm run dev` for development
- For production, try Node.js 18

**Issue: Animations not working**
- Check that Framer Motion is installed
- Verify no CSS conflicts

**Issue: Styles not applying**
- Run `npm run dev` to restart
- Check Tailwind config includes all component paths

## Next Steps

1. Add actual images and videos
2. Integrate newsletter service
3. Add blog/news section
4. Implement contact form
5. Add member registration
6. Connect social media accounts
7. Set up analytics
8. Add SEO metadata per page

## Support

For questions or issues, check:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
