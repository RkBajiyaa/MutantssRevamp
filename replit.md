# Mutantss Digital Marketing Website

## Overview

This is a full-stack digital marketing agency website for Mutantss, built with React (Vite), Express.js, and PostgreSQL. The application showcases the agency's services, philosophy, and enables client engagement through contact forms and newsletter subscriptions. The design follows modern agency website patterns with a focus on clean typography (Playfair Display for headings, Inter for body text), purple gradient aesthetics, and professional credibility balanced with creative energy.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **Vite + React**: Development server and build tool providing fast HMR and optimized production builds
- **TypeScript**: Type-safe development across the entire frontend
- **Wouter**: Lightweight client-side routing (Home, About, Services, Contact pages)
- **TanStack Query**: Server state management for API interactions (contact submissions, newsletter subscriptions)

**UI Component System**
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first styling with custom design tokens defined in theme configuration
- **Design System**: Consistent spacing scale (4, 6, 8, 12, 16, 20, 24, 32), custom color palette with primary purple theme, defined typography hierarchy using Google Fonts

**State Management**
- Form state handled via `react-hook-form` with Zod validation
- Server state via TanStack Query with configured defaults (no refetch on window focus, infinite stale time)
- Toast notifications for user feedback using custom hook pattern

**Key Pages**
- Home: Hero section with animations, philosophy section, impact quote, testimonials, stats with count-up animations
- About: Mission statement, team values, company background
- Services: Comprehensive service listings with categorization and detailed descriptions
- Contact: Form submission with validation and API integration

### Backend Architecture

**Server Framework**
- **Express.js**: RESTful API server with middleware for JSON parsing and request logging
- **Dual Entry Points**: Separate development (`index-dev.ts`) and production (`index-prod.ts`) servers
  - Development mode integrates Vite middleware for HMR
  - Production mode serves static build artifacts

**Data Layer**
- **Storage Abstraction**: `IStorage` interface allows switching between implementations
- **Current Implementation**: In-memory storage (`MemStorage`) using Maps for users, contact submissions, and newsletter subscribers
- **Database Ready**: Drizzle ORM configuration present for PostgreSQL migration path

**API Endpoints**
- `POST /api/contact`: Validates and stores contact form submissions
- `POST /api/newsletter`: Validates and stores newsletter subscriptions with duplicate email checking

**Validation & Type Safety**
- Shared schema definitions using Drizzle ORM table schemas
- Zod validators derived from schemas for runtime validation
- Type inference ensures consistency between client and server

### Design Patterns & Conventions

**Code Organization**
- `/client`: Frontend React application with pages, components, hooks, and utilities
- `/server`: Backend Express application with routes, storage layer, and server setup
- `/shared`: Common TypeScript types and schemas used by both client and server

**Path Aliases**
- `@/*`: Maps to `client/src/*`
- `@shared/*`: Maps to `shared/*`
- `@assets/*`: Maps to `attached_assets/*`

**Component Patterns**
- Compound components for complex UI elements (forms, cards, dialogs)
- Forwarded refs for proper DOM access and composition
- Class variance authority for variant-based styling

**Build Process**
- Client: Vite builds to `dist/public`
- Server: esbuild bundles Node.js application to `dist/index.js`
- Environment-based configuration switches between dev and prod modes

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Headless component primitives for accessible UI components (25+ components including Dialog, Dropdown, Popover, etc.)
- **Lucide React**: Icon library for consistent iconography across the application
- **Embla Carousel**: Carousel/slider functionality with React bindings

### Database & ORM
- **Neon Serverless PostgreSQL**: Database provider (configured but not actively used)
- **Drizzle ORM**: Type-safe SQL query builder with schema migrations
- **Drizzle Kit**: Migration tooling and database introspection

### Form & Validation
- **React Hook Form**: Performant form state management with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **@hookform/resolvers**: Bridges React Hook Form with Zod validators

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling utility
- **clsx + tailwind-merge**: Conditional className composition and conflict resolution

### Development Tools
- **Replit Plugins**: Development banner, runtime error overlay, and cartographer for enhanced Replit IDE integration
- **TypeScript**: Static type checking with path mapping and ESNext features

### Fonts & Assets
- **Google Fonts**: Playfair Display (serif, weights 600-800) and Inter (sans-serif, weights 400-700)
- **Custom Assets**: Logo and generated images stored in `attached_assets/`

### Future Considerations
The application is architected to easily transition from in-memory storage to PostgreSQL by implementing the `IStorage` interface with Drizzle ORM queries. The database configuration and schema are already defined and ready for activation.