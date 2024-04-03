"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ESC = "\x1B";
function clear() {
    console.log(`${ESC}[2J`);
}
function size() {
    let stdout = process.stdout;
    let { columns, rows } = stdout;
    return { width: columns, height: rows };
}
function hide() {
    console.log(`${ESC}[?25l`);
}
function show() {
    console.log(`${ESC}[?25h`);
}
function writeAt(x, y, text) {
    console.log(`${ESC}[${y};${x}f${text}`);
}
function moveTo(x, y) {
    console.log(`${ESC}[${y};${x}H`);
}
function moveToHome() {
    console.log(`${ESC}[H`);
}
function position() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(`${ESC}[6n`);
        process.stdin.setRawMode(true);
        process.stdin.resume();
        return yield new Promise((resolve, _reject) => {
            process.stdin.once("data", (data) => {
                let cleanedData = data.subarray(2, data.length - 1).toString();
                let parts = cleanedData.split(";");
                let x = parseInt(parts[1]);
                let y = parseInt(parts[0]);
                process.stdin.setRawMode(false);
                resolve({ x, y });
            });
        });
    });
}
exports.default = {
    clear,
    size,
    hide,
    show,
    writeAt,
    moveTo,
    position,
};
