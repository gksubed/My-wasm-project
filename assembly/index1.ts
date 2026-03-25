// The 'export' keyword makes this function accessible to JavaScript
// export function isPrime(n: i32): bool {
//   if (n < 2) return false;
//   for (let i: i32 = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }

// export function countPrimes(limit: i32): i32 {
//   let count = 0;
//   for (let i = 2; i <= limit; i++) {
//     if (isPrime(i)) count++;
//   }
//   return count;
// }

// // Keep your isPrime function here too
// function isPrime(n: i32): bool {
//   if (n < 2) return false;
//   for (let i: i32 = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }


export function countPrimes(limit: i32): i32 {
  let count = 0;
  for (let i: i32 = 2; i <= limit; i++) {
    if (isPrime(i)) count++;
  }
  return count;
}

// OPTIMIZED isPrime: stops checking at the square root (i * i <= n)
function isPrime(n: i32): bool {
  if (n < 2) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false; 

  // Instead of i < n, we use i * i <= n
  // Instead of i++, we use i += 2 (skips even numbers)
  for (let i: i32 = 3; i * i <= n; i += 2) {
    if (n % i == 0) return false;
  }
  return true;
}
