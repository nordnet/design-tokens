# Design Tokens

This project turns design tokens into usable formats for our frontends. By using design tokens, we can maintain consistency across all platforms, tools, and products. Currently, we only provide colors for our different themes through design tokens.

## How it works

Design Tokens get exported from Figma using the [Design Tokens plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) which sends the data through Githubs [repository_dispatch](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#repository_dispatch) event. A Github action listens to that event and saves the data as JSON. Then, [Style Dictionary](<[https://amzn.github.io/style-dictionary/](https://amzn.github.io/style-dictionary/#/README)>) transforms the tokens into the desired formats.

## Getting started

For local development, follow these steps:

1. Run `npm i` to install dependencies.
2. Run `npm run transform-tokens` to transform tokens using [Style Dictionary](https://amzn.github.io/style-dictionary/#/README).
3. The converted tokens will be saved in the `src/generated` directory.

If you only want to use the themes provided by this project then simply import them into your codebase like this:

1. Run `npm install -D @nordnet/design-tokens` to install the package.
2. Import for example the lightTheme `import { lightTheme } from '@nordnet/design-tokens'`.

## Formats

This project generates design tokens for each theme in the following formats:

- **JS**: A JavaScript module that exports an object containing the design tokens.
- **JSON**: A JSON file containing the design tokens.
- **CSS**: A CSS file containing CSS variables for the design tokens.

## Limitations

GitHub Actions has a payload limit of 50kB, which prevents exporting all design tokens at once. To circumvent this limitation, we export tokens in chunks using the same branch name to ensure they are added to the same Pull request. It's worth noting that if any new tokens are added or deleted, tests will fail until all chunks are exported.
