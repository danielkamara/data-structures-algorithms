/* write a function that calculates the sum of all 
numbers from 1 up to (and including) some number n. */

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

// Which one is better?
