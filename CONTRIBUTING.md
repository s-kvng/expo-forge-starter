# Contributing to Expo Forge Starter

Thanks for your interest in contributing! This guide will help you get started.

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/expo-forge-starter.git
   cd expo-forge-starter
   ```
3. **Install dependencies**:
   ```bash
   bun install
   ```
4. **Create a branch** for your change:
   ```bash
   git checkout -b feat/your-feature
   ```
5. **Start the dev server** and test your changes:
   ```bash
   bun expo start
   ```

## Branch Naming

Use prefixes to categorize your branch:

- `feat/` — new feature or enhancement
- `fix/` — bug fix
- `docs/` — documentation only
- `refactor/` — code change that doesn't fix a bug or add a feature
- `chore/` — tooling, CI, dependencies

## Code Conventions

- **TypeScript** — no `any` types
- **Imports** — always use the `@/` path alias
- **Text** — use `AppText` from `@/components/shared/app-text`, never `Text` from react-native
- **Images** — use `expo-image`, never `Image` from react-native
- **Styling** — Uniwind (`className`) for most styling; avoid mixing with `StyleSheet` in the same component
- **Theme colors** — use CSS variables, never hard-coded color values
- **File size** — keep files under 200 lines; extract logic into hooks, utils, or services
- **No `console.log`** in committed code

Run the linter before submitting:

```bash
bun expo lint
```

## Submitting a Pull Request

1. Make sure your branch is up to date with `default`:
   ```bash
   git fetch origin
   git rebase origin/default
   ```
2. Push your branch and open a PR against the `default` branch
3. Fill out the PR template — describe what changed and why
4. Wait for review; address any feedback

## What to Contribute

Good first contributions:

- Bug fixes
- New color themes (see `src/themes/` for examples)
- Documentation improvements
- Accessibility improvements
- Example components showcasing HeroUI Native

Please open an issue first for larger changes so we can discuss the approach before you invest time building it.

## Reporting Bugs

Use the **Bug Report** issue template. Include:

- Steps to reproduce
- Expected vs actual behavior
- Platform (iOS, Android, web) and device/simulator info
- Screenshots or screen recordings if applicable

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/). By participating, you are expected to uphold this code.
