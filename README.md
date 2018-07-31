# Sprintfit [![Build Status](https://travis-ci.org/joseluisq/sprintfit.svg?branch=master)](https://travis-ci.org/joseluisq/sprintfit) [![npm](https://img.shields.io/npm/v/sprintfit.svg)](https://www.npmjs.com/package/sprintfit) [![npm](https://img.shields.io/npm/dt/sprintfit.svg)](https://www.npmjs.com/package/sprintfit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Small sprintf and vsprintf format specifier focused on strings. :zap:

*__:information_source: Notice:__ `sprintf` and `vsprintf` will treat their arguments as strings only. If you are looking for the full specification you could try [sprintf.js](https://github.com/alexei/sprintf.js) or [printj](https://github.com/SheetJS/printj).*

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

vsprintf('date: %s-%s-%s', [ 2018, 07, 28 ])
// date: 2018-07-28
```

### Benchmarks

- Node: `v8.11.3`
- [BenchmarkJS](https://benchmarkjs.com): `^2.1.4`
- [Sprintf-js][2]: `^1.1.1`
- [Printj][3]: `^1.1.2`

```sh
yarn benchmark
```

#### sprintf

| package | ops/sec | rme
--- | --- | ---
[Sprintfit][1] | __2,601,688__ | ±5.19% (77 runs sampled)
[SprintfJS][2] | 1,117,038 | ±1.66% (60 runs sampled)
[PrintJ][3] | 1,046,954 | ±2.78% (91 runs sampled)

_Done in 18.00s._

#### vsprintf

| package | ops/sec | rme
--- | --- | ---
[Sprintfit][1] | __2,774,358__ | ±4.03%  (79 runs sampled)
[PrintJ][3] | 905,327 | ±3.64% (79 runs sampled)
[SprintfJS][2] | 675,621 | ±7.06% (63 runs sampled)

_Done in 18.34s._

[1]: https://github.com/joseluisq/sprintfit
[2]: https://github.com/alexei/sprintf.js
[3]: https://github.com/SheetJS/printj

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/sprintfit/pulls) or [issue](https://github.com/joseluisq/sprintfit/issues).

## License
MIT license

© 2018 [José Luis Quintana](http://git.io/joseluisq)
