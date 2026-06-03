export function applyGrayscale(ptr: i32, length: i32): void {
  for (let i = 0; i < length; i += 4) {

    let r = load<u8>(ptr + i);
    let g = load<u8>(ptr + i + 1);
    let b = load<u8>(ptr + i + 2);

    let avg = <u8>((u32(r) + u32(g) + u32(b)) / 3);

    store<u8>(ptr + i, avg);
    store<u8>(ptr + i + 1, avg);
    store<u8>(ptr + i + 2, avg);
  }
}

export function invertColors(ptr: i32, length: i32): void {
  for (let i = 0; i < length; i += 4) {

    store<u8>(ptr + i, 255 - load<u8>(ptr + i));
    store<u8>(ptr + i + 1, 255 - load<u8>(ptr + i + 1));
    store<u8>(ptr + i + 2, 255 - load<u8>(ptr + i + 2));
  }
}