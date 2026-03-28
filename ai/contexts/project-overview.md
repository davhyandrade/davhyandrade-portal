# Project Overview

**Davhy Andrade - Portal** is a personal website and portfolio built with **Next.js 16** and **React 19**. It showcases projects, digital design work, and photography. The project uses **TypeScript** for type safety and **Material UI (MUI) v7** for the component library and styling.

## Architecture

- **Framework:** Next.js App Router.
- **Root Directory:** `src/app` handles routing, layouts, and global providers.
- **Route Groups:** `(portal)` contains the main public-facing site structure.
- **Shared Resources:** `src/shared` contains centralized logic, constants, and theme configurations.
- **Styling:** MUI `ThemeProvider` with CSS variables enabled. Custom components are styled using Emotion or MUI's `sx` prop/styled API.
- **State Management:** Primarily React-native state and props; MUI's `AppRouterCacheProvider` manages SSR styling.

## Tech Stack

- **Framework:** Next.js 16.1.6
- **Library:** React 19.2.3 (with React Compiler enabled in `next.config.ts`)
- **Styling:** MUI 7.3.8, Emotion 11.14
- **Language:** TypeScript 5
- **Tooling:** ESLint 9, Prettier 3.8, Jest 30
