import nullish from '../src/index.mjs'
const DEFAULT = 'default'

const output = {
  'nullish(null, DEFAULT)': nullish(null, DEFAULT), // 'default'
  'nullish(undefined, DEFAULT)': nullish(undefined, DEFAULT), // 'default'
  'nullish(0, DEFAULT)': nullish(0, DEFAULT),
  'nullish(false, DEFAULT)': nullish(false, DEFAULT),
  'nullish("", DEFAULT)': nullish('', DEFAULT),
  'nullish({}, DEFAULT)': JSON.stringify(nullish({}, DEFAULT)),
  'nullish([], DEFAULT)': JSON.stringify(nullish([], DEFAULT)),
  'nullish(1, DEFAULT)': nullish(1, DEFAULT),
  'nullish("test", DEFAULT)': nullish('test', DEFAULT)
}

console.log('esm')
console.table(output)
