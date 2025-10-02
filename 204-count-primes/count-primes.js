/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
//     if(n <= 2){
//         return 0;
//     }
//     let primeArr = [2];
//     let i = 3;

//   while (i < n) {
//     let isPrime = true;

//     for (let val of primeArr) {
//       if (i % val === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       primeArr.push(i);
//     }

//     i++;
//   }

//   return primeArr.length;

//  if (n <= 2) return 0;

//     let count = 0;

//     for (let i = 2; i < n; i++) {
//         if (isPrime(i)) count++;
//     }

//     return count;
// };

// // Helper function to check if a number is prime
// function isPrime(num) {
//     if (num < 2) return false;
//     const sqrt = Math.floor(Math.sqrt(num));
//     for (let i = 2; i <= sqrt; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;

if (n <= 2) return 0;

    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (!isPrime[i]) continue;
        // Mark multiples of i as not prime
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }

    // Count all primes < n
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }

    return count;

};