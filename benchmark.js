const Benchmark = require('benchmark')
const sprintfit = require('./')
const sprintfJs = require('sprintf-js')
const printj = require('printj')

const suite = new Benchmark.Suite()

suite
    // sprintf
    .add('1) Sprintfit: sprintf()', () =>
        sprintfit.sprintf('a %s c %s e %s g', 'B', 'D', 'F'))
    .add('2) SprintfJS: sprintf()', () =>
        sprintfJs.sprintf('a %s c %s e %s g', 'B', 'D', 'F'))
    .add('3) PrintJ: sprintf()', () =>
        printj.sprintf('a %s c %s e %s g', 'B', 'D', 'F'))

    // vsprintf
    .add('1) Sprintfit: vsprintf()', () =>
        sprintfit.vsprintf('a %s c %s e %s g', ['B', 'D', 'F']))
    .add('2) SprintfJS: vsprintf()', () =>
        sprintfJs.vsprintf('a %s c %s e %s g', ['B', 'D', 'F']))
    .add('3) PrintJ: vsprintf()', () =>
        printj.vsprintf('a %s c %s e %s g', ['B', 'D', 'F']))

    .on('cycle', (event) =>
        console.log(String(event.target)))
    .on('complete', () =>
        console.log('Fastest is ' + suite.filter('fastest').map('name')))
    .run({ async: true })
