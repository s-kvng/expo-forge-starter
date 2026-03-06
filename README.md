# Expo Forge Starter

TypeScript-first Expo + Expo Router + Uniwind starter focused on speed, clarity, and good defaults. Ships with theming, opinionated project structure, utility helpers, and ready-made screens.

> **Branches:** The `default` branch is Expo Go-compatible. The `main` branch includes additional batteries — auth with Clerk, backend with Convex, and more.

## Tech Stack

| Category | Tool |
|---|---|
| Framework | [Expo](https://expo.dev) (SDK 55) + React Native 0.83 |
| Routing | [Expo Router](https://docs.expo.dev/router/introduction/) (file-based, typed routes) |
| Styling | [Uniwind](https://uniwind.dev) (Tailwind CSS v4 for React Native) |
| State | [Zustand](https://zustand.docs.pmnd.rs/) with persist middleware |
| Fonts | Poppins (Regular, Medium, SemiBold, Bold) via `expo-font` |
| Tabs | Native Tabs (`expo-router/unstable-native-tabs`) with web fallback |
| Storage | `expo-sqlite/kv-store` (native) / localStorage (web) |

## Features

- **Light & dark theming** — OKLCH color tokens in `global.css`, automatic system theme detection
- **Native tab bar** — Platform-native tabs on iOS/Android with SF Symbols and Material icons, web fallback
- **Unified storage** — Single adapter for Zustand persistence across native and web
- **`cn()` utility** — Tailwind class merging via `clsx` + `tailwind-merge`
- **Custom `AppText`** — Drop-in text component with Poppins font family
- **React Compiler** — Enabled via `reactCompiler: true` experiment
- **Typed routes** — Full type safety for navigation

## Project Structure

```
src/
  app/             Route pages & layouts (_layout.tsx, index.tsx, explore.tsx, theme.tsx)
  components/      UI components (shared/, ui/, common/)
  constants/       Theme colors, fonts, spacing, tab config
  hooks/           Custom hooks (color scheme, large header options)
  helpers/         Helper functions & hooks (accessibility, OTA updates, strings)
  lib/             Utilities (cn(), unified storage adapter)
  store/           Zustand store (auth, theme, profile, preferences)
  services/        API & integrations
  interfaces/      TypeScript interfaces by domain
  types/           Type definitions
  global.css       Tailwind/Uniwind theme config
```

## Get Started

1. **Clone the repo**

   ```bash
   git clone https://github.com/s-kvng/expo-forge-starter.git
   cd expo-forge-starter
   ```

2. **Install dependencies**

   ```bash
   bun install   # or: npm install / yarn / pnpm
   ```

3. **Start the dev server**

   ```bash
   bun expo start
   ```

   From there you can open the app in:
   - [Expo Go](https://expo.dev/go) (default branch)
   - [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Android Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [Development build](https://docs.expo.dev/develop/development-builds/introduction/)

4. **Start editing** — Routes live in `src/app/`. The project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Scripts

| Command | Description |
|---|---|
| `bun expo start` | Start the dev server |
| `bun expo start --ios` | Start on iOS simulator |
| `bun expo start --android` | Start on Android emulator |
| `bun expo start --web` | Start on web |
| `bun expo lint` | Run ESLint |
| `bun run reset-project` | Reset to a blank project |

## Learn More

- [Expo docs](https://docs.expo.dev/) — Fundamentals and advanced guides
- [Expo Router docs](https://docs.expo.dev/router/introduction/) — File-based routing
- [Uniwind docs](https://uniwind.dev) — Tailwind CSS v4 for React Native
- [Zustand docs](https://zustand.docs.pmnd.rs/) — Lightweight state management
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/) — Step-by-step walkthrough

## Community

- [Expo on GitHub](https://github.com/expo/expo)
- [Expo Discord](https://chat.expo.dev)
