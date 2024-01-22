# Design Tokens

This project turns design tokens into usable formats for our frontends. By using design tokens, we can maintain consistency across all platforms, tools, and products. Currently, we only provide colors for our different themes through design tokens.

## How it works

Design Tokens are exported as JSON from Figma using the [Design Tokens plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) and pasted into the `tokens` folder in a new branch. Run `npm run transform-tokens` which instructs [Style Dictionary](<[https://amzn.github.io/style-dictionary/](https://amzn.github.io/style-dictionary/#/README)>) to transforms the tokens into our defined formats.

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
