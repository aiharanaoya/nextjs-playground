# Next.js Playground

A modern Next.js development environment with TypeScript and comprehensive tooling for building, testing, and documenting React applications.

## Features

- **Next.js** for full-stack React applications
- **React** with **TypeScript** for type-safe component development
- **CSS Modules** with TypeScript definitions via CSS Modules Kit
- **Storybook** for component documentation and visual testing
- **Vitest** + **Testing Library** for comprehensive testing
- **Biome** for linting and formatting

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Launch Storybook
pnpm storybook
```

## Available Scripts

```bash
# Development
pnpm dev          # Start Next.js dev server with turbo
pnpm storybook    # Launch Storybook

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm typecheck    # Run TypeScript checks
pnpm biome        # Run linter and formatter

# Testing
pnpm test         # Run all tests

# CSS Modules
pnpm cmk          # Generate CSS Modules type definitions
```
