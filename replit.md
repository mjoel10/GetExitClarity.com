# ExitClarity Landing Page

## Overview

This is a React-based landing page for ExitClarity, a B2B SaaS platform that helps M&A professionals and business owners assess exit readiness. The application features a modern, responsive design built with React, TypeScript, and Tailwind CSS, with a Node.js/Express backend for handling demo requests.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth transitions and interactions
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ESM modules
- **Database**: PostgreSQL (configured) with Drizzle ORM
- **Session Storage**: In-memory storage (development) with PostgreSQL session store support
- **API**: RESTful endpoints for demo request handling

## Key Components

### Frontend Components
1. **Landing Page Sections**:
   - Hero section with primary CTAs
   - Problem identification section
   - Solution presentation (dual audience: M&A professionals and business owners)
   - How it works (3-step process)
   - Platform features showcase
   - Owner benefits section
   - Testimonials with success metrics
   - Benefits comparison section
   - Final CTA with form modal

2. **UI Components**: Comprehensive shadcn/ui component library including:
   - Forms with validation (react-hook-form + zod)
   - Dialogs and modals
   - Navigation components
   - Data display components
   - Interactive elements

3. **Core Features**:
   - Responsive design with mobile-first approach
   - Smooth scrolling navigation
   - Contact form with multiple request types (demo, sample report, assessment)
   - Toast notifications for user feedback
   - Animated sections with scroll-triggered animations

### Backend Components
1. **API Endpoints**:
   - `POST /api/demo-request` - Create new demo requests
   - `GET /api/demo-requests` - Retrieve all demo requests (admin)
   - `PATCH /api/demo-request/:id/contacted` - Update contact status

2. **Data Models**:
   - Users table (basic authentication structure)
   - Demo requests table with contact tracking
   - Request types: demo, sample_report, assessment

3. **Storage Layer**:
   - Abstract storage interface for flexibility
   - In-memory implementation for development
   - PostgreSQL configuration ready for production

## Data Flow

1. **User Interaction**: Users interact with the landing page, scrolling through sections and accessing information
2. **Form Submission**: Users submit demo requests through modal forms
3. **API Processing**: Backend validates and stores requests using Zod schemas
4. **Database Storage**: Requests are stored with timestamps and contact status
5. **Admin Management**: Admin endpoints allow tracking and updating request status

## External Dependencies

### Frontend Dependencies
- **@radix-ui/react-***: Headless UI components for accessibility
- **@tanstack/react-query**: Server state management
- **framer-motion**: Animation library
- **react-hook-form**: Form handling and validation
- **zod**: Schema validation
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library

### Backend Dependencies
- **express**: Web framework
- **drizzle-orm**: Type-safe ORM
- **@neondatabase/serverless**: PostgreSQL driver
- **connect-pg-simple**: PostgreSQL session store
- **zod**: Schema validation (shared with frontend)

### Development Dependencies
- **vite**: Build tool and dev server
- **tsx**: TypeScript execution
- **esbuild**: JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds the React application to `dist/public`
2. **Backend Build**: esbuild bundles the Express server to `dist/index.js`
3. **Database**: Drizzle migrations manage schema changes

### Environment Configuration
- **Development**: Uses tsx for hot reloading and Vite dev server
- **Production**: Serves built static files from Express server
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

### Scripts
- `dev`: Development server with hot reloading
- `build`: Production build for both frontend and backend
- `start`: Production server
- `db:push`: Apply database schema changes

### Platform Integration
- **Replit**: Configured with custom plugins for development environment
- **Neon Database**: PostgreSQL hosting integration
- **Static Assets**: Served directly by Express in production

The application is designed to be easily deployable to various platforms while maintaining a clean separation between frontend and backend concerns. The modular architecture allows for easy scaling and maintenance as the platform grows.