import { memory, applyGrayscale, invertColors } from "../build/release.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d', { willReadFrequently: true });

let imageLoaded = false;
let originalImageData = null;
let filterMode = 0;

// ---------------- LOAD FROM GALLERY ONLY ----------------
document.querySelectorAll(".thumb").forEach(item => {
  item.onclick = () => {

    const img = new Image();
    img.src = item.src;

    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;

      ctx.drawImage(img, 0, 0);

      originalImageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      imageLoaded = true;
      filterMode = 0;
    };
  };
});

// ---------------- FILTER BUTTON ----------------
document.getElementById('filterBtn').onclick = () => {
  if (!imageLoaded) return;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixels = imageData.data;

  // ensure WASM memory
  if (memory.buffer.byteLength < pixels.length) {
    const pages = Math.ceil(pixels.length / 65536);
    memory.grow(pages);
  }

  const buf = new Uint8Array(memory.buffer);
  buf.set(pixels, 0);

  // SWITCH FILTERS
  if (filterMode === 0) {
    applyGrayscale(0, pixels.length);
  } else {
    invertColors(0, pixels.length);
  }

  filterMode = (filterMode + 1) % 2;

  pixels.set(buf.subarray(0, pixels.length));
  ctx.putImageData(imageData, 0, 0);
};

// ---------------- RESET ----------------
document.getElementById('resetBtn').onclick = () => {
  if (!imageLoaded || !originalImageData) return;

  ctx.putImageData(originalImageData, 0, 0);
  filterMode = 0;
  
  // Reset 3D spin
  isSpinning = false;
  rotation = 0;

  container.style.transform =
    `rotateY(0deg) rotateX(0deg)`;

  // Reset button text
  document.getElementById('spinBtn').innerText = "Start 3D Spin";
};

// ---------------- 3D SPIN ----------------
let rotation = 0;
let isSpinning = false;
const container = document.getElementById('container');

function animate() {
  if (isSpinning) {
    rotation += 2;
    container.style.transform =
      `rotateY(${rotation}deg) rotateX(${rotation / 4}deg)`;
  }
  requestAnimationFrame(animate);
}
animate();

document.getElementById('spinBtn').onclick = () => {
  isSpinning = !isSpinning;
  document.getElementById('spinBtn').innerText =
    isSpinning ? "Stop Spin" : "Start 3D Spin";
};

// DEBUG (optional)
console.log("WASM grayscale:", applyGrayscale);
console.log("WASM invert:", invertColors);