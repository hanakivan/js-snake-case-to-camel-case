# snake-case to camelCase

[![](https://flat.badgen.net/npm/v/@ivanhanak_com/snake-case-to-camel-case?icon=npm)](https://www.npmjs.com/package/@ivanhanak_com/snake-case-to-camel-case)
[![NPM Weekly Downloads](https://badgen.net/npm/dw/@ivanhanak_com/snake-case-to-camel-case)](https://www.npmjs.com/package/@ivanhanak_com/snake-case-to-camel-case)

A simple javaScript library for converting strings from snake case to camel case.

## Changelog

See the whole [Changelog](/CHANGELOG.md).

## Install

Using npm:

```sh
npm install @ivanhanak_com/snake-case-to-camel-case
```

Using yarn:

```sh
yarn add @ivanhanak_com/snake-case-to-camel-case
```

## Import
```javascript
import {snakeCaseToCamelCase} from '@ivanhanak_com/snake-case-to-camel-case';
```

## Usage

```javascript
const myString = "text-transform";

const camelCase = snakeCaseToCamelCase(myString);
console.log(camelCase); // => prints "textTransform" 
```

## Browser support
IE10+