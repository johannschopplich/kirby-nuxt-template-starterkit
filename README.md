<p align="center">
  <img src="https://nuxt-kql.jhnn.dev/logo-shadow.svg" alt="Logo of Kirby Nuxt Starter Kit" width="128" height="128">
</p>

<h3 align="center">Kirby Nuxt Starter Kit (For Templates)</h3>

<p align="center">
  A fork of the KQL-based starterkit, but using Kirby templates!<br>
</p>

<br>

# Kirby Nuxt Template Starterkit

This is a is a port of the [Kirby Nuxt Starter Kit](https://github.com/johannschopplich/kirby-nuxt-starterkit) to use a headless Kirby instance by fetching data from [Kirby templates](https://github.com/johannschopplich/kirby-headless-starter#templates).

## Key Features

- 🫂 ~~Kirby Query Language with [`nuxt-kql`](https://nuxt-kql.jhnn.dev)~~
- 🫂 [Kirby templates](https://github.com/johannschopplich/kirby-headless-starter#templates)
- 🪁 [Component based Kirby Blocks](./components/Kirby/Block/)
- 🏛 Global [site data](./plugins/site.ts) similiar to Kirby's `$site`
- 🗳 [Collections](./composables/collections.ts) for pre-defined queries
- 🔎 SSR generated SEO meta data
- 📐 Prettier & ESLint
- 🔢 Pre-configured [VSCode settings](./.vscode/settings.json)
- 🔖 And much more!

## Prerequisites

Before getting started, please make sure you have installed the recommended setup.

- **Node.js**<sup>\*</sup> (v16, the latest LTS version) 👉 [[Download](https://nodejs.org/en/download/)]
- **pnpm**<sup>\*</sup> (the fast and disk space efficient package manager) 👉 [[Download](https://pnpm.io/installation)]
- **Visual Studio Code** 👉 [[Download](https://code.visualstudio.com/)]
- **Volar Extension** 👉 [[Download](https://marketplace.visualstudio.com/items?itemName=Vue.volar)]
  - Enable [**Take Over Mode**](https://vuejs.org/guide/typescript/overview.html#volar-takeover-mode)

## Setup

> [📖 Read the documentation](https://nuxt-kql.jhnn.dev)

Make sure to install the dependencies:

```bash
pnpm install
```

Adapt the relevant environment variables:

```bash
# Base URL of the Kirby backend
KIRBY_BASE_URL=
# Token for bearer authentication
# See https://github.com/johannschopplich/kirby-headless-starter#bearer-token
KIRBY_API_TOKEN=
```

## Development

Start the development server on [localhost:3000](http://localhost:3000):

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Check out the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).

## FAQ

### Are There Any Drawbacks?

Data is fetched within Suspense components to ensure pre-rendered state for the user and SEO. Thus, the initial server response time is increased by about 50–100 ms for the initial KQL page query. This might be a road blocker for you. You can always [pre-render routes](https://github.com/johannschopplich/kirby-nuxt-starterkit/blob/16110e359d48d2f94f1db497d11a1c2d8f9e7b44/nuxt.config.ts#L15).

### What's Kirby?

- **[getkirby.com](https://getkirby.com)** – Get to know the CMS.
- **[Try it](https://getkirby.com/try)** – Take a test ride with our online demo. Or download one of our kits to get started.
- **[Documentation](https://getkirby.com/docs/guide)** – Read the official guide, reference and cookbook recipes.
- **[Issues](https://github.com/getkirby/kirby/issues)** – Report bugs and other problems.
- **[Feedback](https://feedback.getkirby.com)** – You have an idea for Kirby? Share it.
- **[Forum](https://forum.getkirby.com)** – Whenever you get stuck, don't hesitate to reach out for questions and support.
- **[Discord](https://chat.getkirby.com)** – Hang out and meet the community.
- **[YouTube](https://youtube.com/kirbyCasts)** - Watch the latest video tutorials visually with Bastian.
- **[Twitter](https://twitter.com/getkirby)** – Spread the word.
- **[Instagram](https://www.instagram.com/getkirby/)** – Share your creations: #madewithkirby.

## License

[MIT](./LICENSE) License © 2022 [Johann Schopplich](https://github.com/johannschopplich)
