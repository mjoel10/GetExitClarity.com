# ExitClarity Landing Page

## Overview
This project is a React-based landing page for ExitClarity, a B2B SaaS platform designed to assist M&A professionals and business owners in assessing exit readiness. It features a modern, responsive design built with React, TypeScript, and Tailwind CSS, complemented by a Node.js/Express backend for managing demo requests. The platform aims to provide unbiased value, standardized documentation, and improved deal preparation, ultimately transforming deal funnels and enhancing client relationships in the M&A space.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library, using a professional blue color scheme (hsl(218 100% 25%)).
- **State Management**: TanStack Query for server state.
- **Routing**: Wouter for lightweight client-side routing.
- **Animations**: Framer Motion for smooth transitions and interactions, including scroll-triggered animations.
- **Build Tool**: Vite for fast development and optimized builds.
- **UI/UX Decisions**: Responsive design with a mobile-first approach, featuring clear visual hierarchy, alternating white and blue backgrounds for sections, professional alignment of visuals, and optimized element sizing for various screen sizes. Interactive elements like hover tooltips and animated assessment indicators are used.

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL (configured) with Drizzle ORM
- **Session Storage**: In-memory (development) with PostgreSQL session store support
- **API**: RESTful endpoints for handling demo requests, including lead capture for sample reports and contact forms.

### Core Features
- **Multi-Page Structure**: Expanded from single landing page to comprehensive site with dedicated pages:
  - `/` - Main landing page with hero, features, and CTA sections
  - `/platform/ma-firms` - Dedicated page for M&A professionals with specialized content
  - `/platform/business-owners` - Tailored content for business owners
  - `/sample-report` - Standalone sample report download with form integration
  - `/blog` - Coming soon blog page with content category previews
  - `/trial-request` - Client trial request form for M&A professionals
  - `/resources` - Resource center hub
- **Navigation System**: Fixed header with organized dropdown menus:
  - Platform dropdown (M&A Firms, Business Owners)
  - Resources dropdown (Resource Center, Blog, Sample Report, Trial Request)
  - Separate refs for proper dropdown functionality
- **Contact Forms**: Comprehensive contact form implementation with success screens, email notifications via SendGrid, and database integration for submissions. Supports multiple request types (demo, sample report, assessment, trial).
- **Mobile Optimization**: All pages fully responsive with mobile-first design:
  - Responsive typography (text-3xl sm:text-4xl lg:text-5xl patterns)
  - Mobile-optimized spacing (py-12 sm:py-16 lg:py-20)
  - Touch-friendly button sizing and spacing
  - Proper mobile navigation with hamburger menu
- **UI Components**: Utilizes shadcn/ui for forms (with react-hook-form + zod validation), dialogs, navigation, and data display.
- **Visuals**: Enhanced hero section with professional, flat MacBook visual displaying assessment progress. Integration of actual ExitClarity Sample Report PDF for download after form submission.
- **Security Page**: Structured content with diverse and contextually appropriate icons.

## External Dependencies

### Frontend
- **@radix-ui/react-***: Headless UI components.
- **@tanstack/react-query**: Server state management.
- **framer-motion**: Animation library.
- **react-hook-form**: Form handling and validation.
- **zod**: Schema validation.
- **tailwindcss**: CSS framework.
- **lucide-react**: Icon library.

### Backend
- **express**: Web framework.
- **drizzle-orm**: Type-safe ORM.
- **@neondatabase/serverless**: PostgreSQL driver.
- **connect-pg-simple**: PostgreSQL session store.
- **zod**: Schema validation.
- **SendGrid**: Email notification system.

### Development & Deployment
- **vite**: Frontend build tool and dev server.
- **tsx**: TypeScript execution.
- **esbuild**: Backend bundler.
- **Neon Database**: PostgreSQL hosting.
- **Calendly**: External booking page integration for "Get Started" CTA.