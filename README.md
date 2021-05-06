# Shufflable-Array

> Extended javascript native `Array` to add a `shuffle()` method.

This doesn't modify `Array.prototype`.

[![npm (scoped)](https://img.shields.io/npm/v/shufflable-array.svg)](https://npmjs.com/package/shufflable-array)
[![install size](https://packagephobia.now.sh/badge?p=shufflable-array)](https://packagephobia.now.sh/result?p=shufflable-array)
[![downloads](https://img.shields.io/npm/dt/shufflable-array.svg)](https://npmjs.com/package/shufflable-array) <br>
[![dependencies](https://david-dm.org/mirismaili/shufflable-array.svg)](https://david-dm.org/mirismaili/shufflable-array)
[![devDependencies](https://david-dm.org/mirismaili/shufflable-array/dev-status.svg)](https://david-dm.org/mirismaili/shufflable-array?type=dev) <br>
[![license](https://img.shields.io/github/license/mirismaili/shufflable-array.svg)](https://github.com/mirismaili/shufflable-array/blob/master/LICENSE)
[![Forks](https://img.shields.io/github/forks/mirismaili/shufflable-array.svg?style=social)](https://github.com/mirismaili/shufflable-array/fork)
[![Stars](https://img.shields.io/github/stars/mirismaili/shufflable-array.svg?style=social)](https://github.com/mirismaili/shufflable-array)

```bash
npm i shufflable-array
```

or:

```bash
yarn add shufflable-array
```

## Usage

```javascript
import ShufflableArray from 'shufflable-array'

const shufflableArray = new ShufflableArray(1, 2, 3, 4, 5)

console.log(shufflableArray instanceof Array) // => true

shufflableArray.shuffle()
```

## Example

```javascript
import ShufflableArray from 'shufflable-array'

const shufflableArray = new ShufflableArray(1, 2, 3, 4, 5)
console.log(shufflableArray) // => ShufflableArray(5) [ 1, 2, 3, 4, 5 ]
console.log(shufflableArray[2], shufflableArray[5]) // => 3 undefined
console.log(shufflableArray.length) // => 5

shufflableArray.push(6)
console.log(shufflableArray) // => ShufflableArray(6) [ 1, 2, 3, 4, 5, 6 ]

shufflableArray[5] = 0
console.log(shufflableArray) // => ShufflableArray(6) [ 1, 2, 3, 4, 5, 0 ]

const shuffledArray = shufflableArray.shuffle()
console.log(shufflableArray) // => Ex. ShufflableArray(6) [ 1, 3, 5, 4, 0, 2 ]
console.log(shufflableArray === shuffledArray) // => true
```
