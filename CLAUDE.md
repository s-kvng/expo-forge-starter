# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Expo Forge Starter — a TypeScript-first Expo + expo-router + Uniwind starter kit. The `default` branch is Expo Go-compatible; the `main` branch adds auth (Clerk), backend (Convex), and more batteries.

## Commands

- **Install**: `bun install`
- **Start dev server**: `bun expo start` (opens options for iOS sim, Android emulator, web, Expo Go)
- **iOS**: `bun expo start --ios`
- **Android**: `bun expo start --android`
- **Web**: `bun expo start --web`
- **Lint**: `bun expo lint`
- **Install Expo packages**: `npx expo install <package>` (ensures SDK-compatible versions)

## Architecture

### Routing
File-based routing via **Expo Router**. All route files live in `src/app/`. The root `_layout.tsx` wraps the app in a `ThemeProvider` and renders `AppTabs`. Tabs use `expo-router/unstable-native-tabs` (NativeTabs) on native with a web fallback (`app-tabs.web.tsx`). Tab definitions are data-driven from `src/constants/tabs.ts` (name, label, SF Symbol + Material icon).

### Styling
**Uniwind** (Tailwind CSS v4 for React Native) via `className` props. Configured in `metro.config.js` with `withUniwindConfig`. Global CSS entry at `src/global.css` defines theme variables (OKLCH colors) with `@variant light` / `@variant dark`. Types auto-generated to `src/uniwind-types.d.ts`. Use `cn()` from `@/lib/utils` to merge Tailwind classes.

### State Management
**Zustand** with `persist` middleware. Single store at `src/store/store.ts` with slices for auth, theme, profile drafts, and preferences. Persistence uses `src/lib/storage/unified-storage.ts` — localStorage on web, `expo-sqlite/kv-store` on native. Only `theme` and `toggles` are persisted.

### Path Aliases
`@/*` maps to `./src/*` and `@/assets/*` maps to `./assets/*` (tsconfig.json).

## Key Conventions

- **Text**: Never import `Text` from `react-native` directly. Use `AppText` from `@/components/shared/app-text`.
- **Images**: Use `expo-image` only, never `Image` from `react-native`.
- **Platform-specific code**: Use Expo platform extensions (`.ios.tsx`, `.android.tsx`, `.web.tsx`). For styling, use Uniwind platform selectors (`ios:`, `android:`).
- **Theme colors**: Use CSS variables defined in `global.css` (`--color-background`, `--color-foreground`, `--accent`, etc.). Avoid hard-coded color values.
- **Fonts**: Poppins family loaded via `expo-font` plugin in `app.json`. Custom font mapping in `global.css` `@theme` block.
- **File size**: Keep files under 200 lines. Extract logic into hooks, utils, services.
- **Imports**: Always use `@/` path alias. Avoid barrel re-exports that pull in unused code.
- **State**: Zustand for shared/form state. `useState` only for trivial local UI.
- **Services**: Backend logic in `src/services/`, never directly in UI components.

## Key Experiments Enabled

- `typedRoutes: true` — type-safe route names
- `reactCompiler: true` — React Compiler enabled

## Folder Structure (src/)

```
app/           — Expo Router pages & layouts
components/    — UI components (shared/, ui/, common/)
constants/     — Colors, fonts, tabs, theme values
hooks/         — Custom hooks
helpers/       — Helper functions and hooks (utils/, hooks/)
lib/           — Library code (utils.ts, storage/)
store/         — Zustand stores
services/      — API & integrations
interfaces/    — TypeScript interfaces by domain
types/         — Type definitions
```
