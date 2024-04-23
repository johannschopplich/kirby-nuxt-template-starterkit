<p align="center">
  <img src="https://nuxt-kql.jhnn.dev/logo-shadow.svg" alt="Kirby Nuxt Template Starter Kit" width="128" height="128">
</p>

<h3 align="center">Kirby Nuxt Starter Kit (Using Templates)</h3>

<p align="center">
  A fork of the KQL-based starterkit, but using Kirby templates<br>
</p>

<br>

# Kirby Nuxt Starter Kit (Using Templates)

This is a fork of the [Kirby Nuxt Starter Kit](https://github.com/johannschopplich/kirby-nuxt-starterkit) to use a headless Kirby instance with plain [Kirby templates](https://github.com/johannschopplich/kirby-headless#templates) instead of [KQL](https://github.com/getkirby/kql).

## Key Features

- 🫂 ~~Kirby Query Language with [`nuxt-kql`](https://nuxt-kql.jhnn.dev)~~
- 🫂 [Kirby templates](https://github.com/johannschopplich/kirby-headless#templates)
- 🪁 [Component based Kirby Blocks](./components/Kirby/Block/)
- 🏛 Global [site data](./plugins/site.ts) similar to Kirby's `$site`
- 🗳 [Collections](./composables/collections.ts) for pre-defined queries
- 🔎 SSR generated SEO metadata
- 📐 Prettier & ESLint
- 🔢 Pre-configured [VSCode settings](./.vscode/settings.json)
- 🔖 And much more!

## Usage

### Prerequisites

1. Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
2. Install dependencies using `pnpm install`
3. Adapt the relevant environment variables:

```bash
# Base URL of the Kirby backend
KIRBY_BASE_URL=
# Token for bearer authentication
# See https://github.com/johannschopplich/kirby-headless-starter#private-vs-public-api
KIRBY_API_TOKEN=
```

### Development

1. Start the development server using `pnpm run dev`
2. Visit [localhost:3000](http://localhost:3000/)

### Production

Build the application for production with `pnpm run build`.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## FAQ

### Are There Any Drawbacks?

Data is fetched within Suspense components to ensure pre-rendered state for the user and SEO. Thus, the initial server response time is increased by about 50–100 ms for the initial KQL page query. This might be a road blocker for you. You can always [pre-render routes](https://github.com/johannschopplich/kirby-nuxt-starterkit/blob/8484d7890795919ef0b968b4cc4e9d00b7e0b84a/nuxt.config.ts#L20).

### What's Kirby?

- **[getkirby.com](https://getkirby.com)** – Get to know the CMS.
- **[Try it](https://getkirby.com/try)** – Take a test ride with our online demo. Or download one of our kits to get started.
- **[Documentation](https://getkirby.com/docs/guide)** – Read the official guide, reference and cookbook recipes.
- **[Issues](https://github.com/getkirby/kirby/issues)** – Report bugs and other problems.
- **[Feedback](https://feedback.getkirby.com)** – You have an idea for Kirby? Share it.
- **[Forum](https://forum.getkirby.com)** – Whenever you get stuck, don't hesitate to reach out for questions and support.
- **[Discord](https://chat.getkirby.com)** – Hang out and meet the community.
- **[YouTube](https://youtube.com/kirbyCasts)** - Watch the latest video tutorials visually with Bastian.
- **[Mastodon](https://mastodon.social/@getkirby)** – Spread the word.
- **[Instagram](https://www.instagram.com/getkirby/)** – Share your creations: #madewithkirby.

## License

[MIT](./LICENSE) License © 2022-PRESENT [Johann Schopplich](https://github.com/johannschopplich)
