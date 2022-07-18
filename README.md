## Nullish

Resolve nullish coalescing operator (??) compatibility issues

## Install

```bash
npm install nullish --save
```

## Usage

See the test folder [test/index.js](test/index.js)

```js
import nullish from 'nullish'

// null ?? 'value'
const obj = {}
nullish(obj.name, 'value')
```
