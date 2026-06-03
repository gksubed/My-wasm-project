/** Exported memory */
export declare const memory: WebAssembly.Memory;
// Exported runtime interface
export declare function __new(size: number, id: number): number;
export declare function __pin(ptr: number): number;
export declare function __unpin(ptr: number): void;
export declare function __collect(): void;
export declare const __rtti_base: number;
/**
 * assembly/index/applyGrayscale
 * @param ptr `i32`
 * @param length `i32`
 */
export declare function applyGrayscale(ptr: number, length: number): void;
/**
 * assembly/index/invertColors
 * @param ptr `i32`
 * @param length `i32`
 */
export declare function invertColors(ptr: number, length: number): void;
