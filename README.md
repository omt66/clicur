# CLI Cursor

Simple cursor manipulation for a ANSI terminals.

## Installation

`$ npm i clicursor`

## Usage

```js
Common JS
const cc = require("clicursor")

or

TS
import cc from "clicursor"


// Clear the terminal screen
cc.clear()

```

## Example 1:

```ts
/**
 * Simple demo that writes a star at a random position every 100ms
 */
function example1() {
    let { width, height } = cc.size()
    let midX = Math.floor(width / 2)
    let midY = Math.floor(height / 2)
    cc.clear()
    cc.hide()
    setInterval(() => {
        let x = Math.floor(Math.random() * width)
        let y = Math.floor(Math.random() * height)
        cc.writeAt(x, y, "*")
        cc.writeAt(midX-15, midY, `Terminal width: ${width}, height: ${height}`)
    }, 100)
    process.on('exit', cc.show)
}
```

## Example 2:
```ts
/**
 * Another simple demo that writes the current ISO date & time every 100ms
 */
function example2() {
    let { width, height } = cc.size()
    let midX = Math.floor(width / 2)
    let midY = Math.floor(height / 2)
    cc.clear()
    cc.hide()
    setInterval(() => {
        cc.writeAt(midX-15, midY, `ISO date-> ${new Date().toISOString()}`)
    }, 100)
    process.on('exit', cc.show)
}
```



