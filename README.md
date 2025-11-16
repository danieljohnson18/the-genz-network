# The Gen Z Network

A modern, responsive landing page for The Gen Z Network - "A Successive Generation of Light".

## Features

- **Modern Design**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations using Framer Motion
- **UI Components**: Beautiful UI components from shadcn/ui
- **SEO Optimized**: Proper metadata and semantic HTML

## Sections

1. **Hero Section**: Full-screen hero with animated gradient background and call-to-action
2. **Mission Section**: Four key mission pillars with animated cards
3. **Objectives Section**: 10 key objectives displayed in an interactive grid
4. **Goals Section**: Programs and initiatives showcase
5. **Founder Section**: Tribute to the founder with vision statement
6. **Footer**: Complete footer with newsletter signup and social links

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Adding a Video Background

To add a video background to the hero section:

1. Place your video file in `public/videos/hero-video.mp4`
2. Uncomment the video element in [components/Hero.tsx](components/Hero.tsx:21-27)

### Changing Colors

The color scheme uses Tailwind CSS. Main colors are:
- Primary: Teal (`teal-500`, `teal-600`)
- Secondary: Blue (`blue-500`, `blue-600`)
- Accent: Purple, Pink, Orange (various gradients)

### Adding Images

- Logo: Update the logo section in [components/Header.tsx](components/Header.tsx:47-58)
- Founder Image: Replace the placeholder in [components/FounderSection.tsx](components/FounderSection.tsx:14-29)

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **shadcn/ui**: Beautiful UI components
- **Lucide React**: Icon library

## Project Structure

```
genz-network/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn UI components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── MissionSection.tsx  # Mission section
│   ├── ObjectivesSection.tsx # Objectives grid
│   ├── GoalsSection.tsx    # Goals and programs
│   ├── FounderSection.tsx  # Founder section
│   └── Footer.tsx          # Footer
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── videos/             # Video assets
```

## License

Copyright © 2024 The Gen Z Network. All rights reserved.

## Contact

For more information, visit our website or reach out to us through the contact form.
# the-genz-network
