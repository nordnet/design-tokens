# Design Tokens

This project turns design tokens into usable formats for our frontends. By using design tokens, we can maintain consistency across all platforms, tools, and products. Currently, we only provide colors for our different themes through design tokens.

## How it works

Design Tokens are exported as JSON from Figma using the [Design Tokens plugin](https://www.figma.com/community/plugin/888356646278934516/Design-Tokens) and pasted into the `tokens` folder in a new branch. Run `npm run transform-tokens` which instructs [Style Dictionary](<[https://amzn.github.io/style-dictionary/](https://amzn.github.io/style-dictionary/#/README)>) to transforms the tokens into our defined formats.

## Getting started

For local development, please follow these steps:

1. **Install Dependencies:** Begin by installing all required dependencies. Open your terminal, navigate to the project's root directory, and execute:

```sh
npm install
```

2. **Transform Design Tokens:** Next, transform your design tokens using [Style Dictionary](https://amzn.github.io/style-dictionary/#/README). This step converts our JSON-formatted tokens into usable formats for different platforms. Run the following command:

```sh
npm run transform-tokens
```

**Note:** If you are contributing via a pull request and your changes involve modifications to any tokens/\*.json files, the project's GitHub Actions workflow will automatically perform this transformation step for you. This ensures that your contributions are seamlessly integrated without requiring manual token transformation.

3. **Access Generated Tokens:** After transformation, the generated tokens can be found within the src/generated directory.

## Usage the themes

If you want to utilize the themes provided by this repository, you can integrate them into your codebase like this:

1. **Install the Design Tokens Package:** Add the design tokens to your project by running the following command:

```sh
npm install -D @nordnet/design-tokens
```

This installs the `@nordnet/design-tokens` package as a development dependency.

2. **Import the desired theme:** You can now import the themes directly into your project. For example, to use the light theme, add the following import statement to your code:

```sh
import { lightTheme } from '@nordnet/design-tokens'
```

Replace `lightTheme` with any other theme provided by the package as necessary.

## Formats

This project generates design tokens for each theme in the following formats:

- **JS**: A JavaScript module that exports an object containing the design tokens.
- **JSON**: A JSON file containing the design tokens.
- **CSS**: A CSS file containing CSS variables for the design tokens.
