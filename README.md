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

- đĢ ~~Kirby Query Language with [`nuxt-kql`](https://nuxt-kql.jhnn.dev)~~
- đĢ [Kirby templates](https://github.com/johannschopplich/kirby-headless-starter#templates)
- đĒ [Component based Kirby Blocks](./components/Kirby/Block/)
- đ Global [site data](./plugins/site.ts) similiar to Kirby's `$site`
- đŗ [Collections](./composables/collections.ts) for pre-defined queries
- đ SSR generated SEO meta data
- đ Prettier & ESLint
- đĸ Pre-configured [VSCode settings](./.vscode/settings.json)
- đ And much more!

## Usage

### Prerequisites

1. Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
2. Install dependencies using `pnpm install`
3. Adapt the relevant environment variables:

```bash
# Base URL of the Kirby backend
KIRBY_BASE_URL=
# Token for bearer authentication
# See https://github.com/johannschopplich/kirby-headless-starter#bearer-token
KIRBY_API_TOKEN=
```

### Development

1. Start the development server using `pnpm run dev`
2. Visit [localhost:3000](http://localhost:3000/)

> âšī¸ Enable [Take Over Mode](https://vuejs.org/guide/typescript/overview.html#takeover-mode) in Visual Studio Code.

### Production

Build the application for production with `pnpm run build`.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment).

## FAQ

### Are There Any Drawbacks?

Data is fetched within Suspense components to ensure pre-rendered state for the user and SEO. Thus, the initial server response time is increased by about 50â100 ms for the initial KQL page query. This might be a road blocker for you. You can always [pre-render routes](https://github.com/johannschopplich/kirby-nuxt-starterkit/blob/16110e359d48d2f94f1db497d11a1c2d8f9e7b44/nuxt.config.ts#L15).

### What's Kirby?

- **[getkirby.com](https://getkirby.com)** â Get to know the CMS.
- **[Try it](https://getkirby.com/try)** â Take a test ride with our online demo. Or download one of our kits to get started.
- **[Documentation](https://getkirby.com/docs/guide)** â Read the official guide, reference and cookbook recipes.
- **[Issues](https://github.com/getkirby/kirby/issues)** â Report bugs and other problems.
- **[Feedback](https://feedback.getkirby.com)** â You have an idea for Kirby? Share it.
- **[Forum](https://forum.getkirby.com)** â Whenever you get stuck, don't hesitate to reach out for questions and support.
- **[Discord](https://chat.getkirby.com)** â Hang out and meet the community.
- **[YouTube](https://youtube.com/kirbyCasts)** - Watch the latest video tutorials visually with Bastian.
- **[Twitter](https://twitter.com/getkirby)** â Spread the word.
- **[Instagram](https://www.instagram.com/getkirby/)** â Share your creations: #madewithkirby.

## License

[MIT](./LICENSE) License ÂŠ 2022 [Johann Schopplich](https://github.com/johannschopplich)
