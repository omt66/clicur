import cc from "../src/index"

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

example1()
