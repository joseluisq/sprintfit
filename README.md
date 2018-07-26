# Sprintfit [![Build Status](https://travis-ci.org/joseluisq/sprintfit.svg?branch=master)](https://travis-ci.org/joseluisq/sprintfit) [![npm](https://img.shields.io/npm/v/sprintfit.svg)](https://www.npmjs.com/package/sprintfit) [![npm](https://img.shields.io/npm/dt/sprintfit.svg)](https://www.npmjs.com/package/sprintfit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Small sprintf and vsprintf format specifier focused on strings.

__:information_source: Notice:__ `sprintf` and `vsprintf` will treat their arguments as strings only. If you are looking for the full specification you could try [sprintf.js](https://github.com/alexei/sprintf.js) or [printj](https://github.com/SheetJS/printj).

## Install

[Yarn](https://github.com/yarnpkg/)

```sh
yarn add sprintfit
```

[NPM](https://www.npmjs.com/)

```sh
npm install sprintfit
```

[UMD](https://github.com/umdjs/umd/) file is also available on [unpkg](https://unpkg.com):

```html
<script src="https://unpkg.com/sprintfit/sprintfit.umd.min.js"></script>
```

You can use the library via `window.sprintfit`.

## Usage

### sprintf

Return a formatted string and accepts a variable number of arguments.

```js
import { sprintf } from 'sprintfit'

sprintf('date: %s-%s-%s', 2018, 07, 25)
// date: 2018-07-25
```

### vsprintf

Operates as `sprintf()` but accepts an array of arguments.

```js
import { vsprintf } from 'sprintfit'

vsprintf('date: %s-%s-%s', [2018, 07, 28])
// date: 2018-07-28
```

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/sprintfit/pulls) or [issue](https://github.com/joseluisq/sprintfit/issues).

## License
MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
