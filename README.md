# Sprintfit [![Build Status](https://travis-ci.com/joseluisq/sprintfit.svg?branch=master)](https://travis-ci.com/joseluisq/sprintfit) [![npm](https://img.shields.io/npm/v/sprintfit.svg)](https://www.npmjs.com/package/sprintfit) [![npm](https://img.shields.io/npm/dt/sprintfit.svg)](https://www.npmjs.com/package/sprintfit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A [fast](https://jsbench.me/wgjkuw5xly/1) 450b sprintf & vsprintf format specifier focused on strings with no dependencies. :zap:

*__Note:__ `sprintf` and `vsprintf` will treat their arguments as strings only. If you are looking for the full specification you could try [sprintf.js](https://github.com/alexei/sprintf.js) or [printj](https://github.com/SheetJS/printj).*

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

## Benchmarks

- Node: `v8.11.3`
- [BenchmarkJS](https://benchmarkjs.com): `^2.1.4`
- [Sprintf-js][2]: `^1.1.1`
- [Printj][3]: `^1.1.2`

```sh
yarn build
yarn benchmark
```

:rocket: Try [beanchmark online](https://jsbench.me/wgjkuw5xly/1)

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

#### Node v12

Node: `v12.16.1`

```sh
# sprintf
1) Sprintfit: sprintf() x 2,041,472 ops/sec ±3.13% (83 runs sampled)
2) SprintfJS: sprintf() x 915,427 ops/sec ±2.79% (84 runs sampled)
3) PrintJ: sprintf() x 1,114,252 ops/sec ±3.55% (79 runs sampled)

Fastest is 1) Sprintfit: sprintf()

# vsprintf
1) Sprintfit: vsprintf() x 2,281,271 ops/sec ±0.52% (91 runs sampled)
2) SprintfJS: vsprintf() x 704,705 ops/sec ±2.24% (84 runs sampled)
3) PrintJ: vsprintf() x 1,193,415 ops/sec ±2.13% (83 runs sampled)

Fastest is 1) Sprintfit: vsprintf()

Done in 36.05s.
```

## Contributions

Feel free to send some [Pull request](https://github.com/joseluisq/sprintfit/pulls) or [issue](https://github.com/joseluisq/sprintfit/issues).

## License
MIT license

© 2018-present [Jose Quintana](http://git.io/joseluisq)
