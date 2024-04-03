declare function clear(): void;
declare function size(): {
    width: number;
    height: number;
};
declare function hide(): void;
declare function show(): void;
declare function writeAt(x: number, y: number, text: string): void;
declare function moveTo(x: number, y: number): void;
declare function position(): Promise<unknown>;
declare const _default: {
    clear: typeof clear;
    size: typeof size;
    hide: typeof hide;
    show: typeof show;
    writeAt: typeof writeAt;
    moveTo: typeof moveTo;
    position: typeof position;
};
export default _default;
