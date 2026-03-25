

    import { applyGrayscale, memory } from "../build/release.js";

    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = "anonymous"; // Add this line!
    img.src = 'images/car3.jpg';


    // img.onload = () => {
    //   canvas.width = img.width;
    //   canvas.height = img.height;
    //   ctx.drawImage(img, 0, 0);
    // };

    // Wait for it to finish loading before trying to draw it
img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    console.log("Image loaded successfully!");
};

// Add this to catch errors (like a wrong path)
img.onerror = () => {
    console.error("Could not find the image at: " + img.src);
    alert("Check your 'images' folder for " + img.src);
};
let rotation = 0;
let isSpinning = false;
const container = document.getElementById('container');

// The Spin Loop
function animate() {
  if (isSpinning) {
    rotation += 2; // Speed of rotation
    container.style.transform = `rotateY(${rotation}deg) rotateX(${rotation/4}deg)`;
  }
  requestAnimationFrame(animate); // Keep the loop smooth
}
animate();

document.getElementById('spinBtn').onclick = () => {
  isSpinning = !isSpinning;
  document.getElementById('spinBtn').innerText = isSpinning ? "Stop Spin" : "Start 3D Spin";
};

// ... keep your existing 'invertBtn' and Wasm logic here ...

    document.getElementById('btn').onclick = () => {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data; // This is a Uint8ClampedArray

      // 1. Copy pixels into Wasm Memory
      const wasmBuffer = new Uint8Array(memory.buffer);
      wasmBuffer.set(pixels);

      // 2. Run the Wasm filter
      applyGrayscale(pixels.length);

      // 3. Copy it back and update the screen
      pixels.set(wasmBuffer.subarray(0, pixels.length));
      ctx.putImageData(imageData, 0, 0);
    };
 
