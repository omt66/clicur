import cc from "../src/index"

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

example2()

