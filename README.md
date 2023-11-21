# Arbicuir, S.L. Website

## Table of contents

- [Tech and tools](#tech-and-tools)
- [Project structure](#project-structure)
- [Installation](#installation)
- [Commands](#commands)

## Tech and tools

- [Astro](https://astro.build/): Web framework for building performant content-focused websites.
- [Svelte](https://svelte.dev/): Front-end library that compiles declarative components into fast and lean web apps. 
- [TailwindCSS](https://tailwindcss.com/): Utility-first, component driven CSS framework.

## Project structure

```
/
├── public/
│   └── Static assets to be served.
├── src/
│   ├── content/
│   │   └── Content data.
│   ├── ui/
│   │   └── Reusable UI components.
│   ├── layouts/
│   │   └── Layouts.
│   └── utils/
│       └── Helper functions and shared constants.
│   └── pages/
│       └── Pages and co-located components and files.
└── Config files
```

## Installation

Clone this repository:

```
git clone https://github.com/marioperezhurtado/arbicuir.git
cd arbicuir
```

Install dependencies:

```
npm install
```


## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

[Astro Docs](https://docs.astro.build)
