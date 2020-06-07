# stylelint-config-bellangerq

Custom stylelint configuration of Quentin Bellanger.

⚠️ In order to use this configuration, [stylelint](https://stylelint.io/user-guide/get-started) must be installed.

## Installation

```sh
# Using npm
npm install stylelint-config-bellangerq --save-dev

# Using yarn
yarn add -D stylelint-config-bellangerq
```

## Usage

Create a `stylelint.config.js` file at the project's root:

```js
modules.exports = {
	extends: 'stylelint-config-bellangerq'
}
```

## Development

Update the configuration in the main `index.js` file and test it against sample files (`.css`, `.scss` and `.vue`):

```sh
yarn lint
```
