export function applyGrayscale(length: i32): void {
  for (let i = 0; i < length; i += 4) {
    // Each pixel is 4 bytes: Red, Green, Blue, Alpha
    let r = load<u8>(i);
    let g = load<u8>(i + 1);
    let b = load<u8>(i + 2);

    // Standard grayscale formula: average the colors
    let avg = <u8>((u32(r) + u32(g) + u32(b)) / 3);

    store<u8>(i, avg);     // Set Red to avg
    store<u8>(i + 1, avg); // Set Green to avg
    store<u8>(i + 2, avg); // Set Blue to avg
    // We leave (i + 3) alone because that is the transparency (Alpha)
  }
}
// Add this to assembly/index.ts
export function invertColors(length: i32): void {
  for (let i = 0; i < length; i += 4) {
    store<u8>(i, 255 - load<u8>(i));     // Invert Red
    store<u8>(i + 1, 255 - load<u8>(i+1)); // Invert Green
    store<u8>(i + 2, 255 - load<u8>(i+2)); // Invert Blue
  }
}
