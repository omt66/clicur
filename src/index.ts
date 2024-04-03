const ESC = "\x1B"

/**
 * Clear terminal screen
 */
function clear() {
    console.log(`${ESC}[2J`)
}

/**
 * Get terminal size
 * 
 * @returns width and height of terminal
 */
function size() {
    let stdout = process.stdout
    let { columns, rows } = stdout
    return { width: columns, height: rows }
}

/**
 * Hide terminal cursor
 */
function hide() {
    console.log(`${ESC}[?25l`)
}

/**
 * Show terminal cursor
 */
function show() {
    console.log(`${ESC}[?25h`)
}

/**
 * Write text at x, y position
 * 
 * @param x 
 * @param y 
 * @param text 
 */
function writeAt(x: number, y: number, text: string) {
    console.log(`${ESC}[${y};${x}f${text}`)
}

/**
 * Move cursor to x, y position
 * 
 * @param x 
 * @param y 
 */
function moveTo(x: number, y: number) {
    console.log(`${ESC}[${y};${x}H`)
}

/**
 * Move cursor to home position
 */
function moveToHome() {
    console.log(`${ESC}[H`)
}

/**
 * Get current cursor position
 */
async function position() {
    console.log(`${ESC}[6n`) // <ESC>[6n
    process.stdin.setRawMode(true)
    process.stdin.resume()
    return await new Promise((resolve, _reject) => {
        process.stdin.once("data", (data: Buffer) => {
            // Response: <ESC>[{row};{column}R
            let cleanedData = data.subarray(2, data.length - 1).toString()
            let parts = cleanedData.split(";")
            let x = parseInt(parts[1])
            let y = parseInt(parts[0])
            process.stdin.setRawMode(false)
            resolve({ x, y })
        })
    })
}

export default {
    clear,
    size,
    hide,
    show,
    writeAt,
    moveTo,
    position,
}

