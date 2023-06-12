const express = require('express');
const app = express();
const port = 8008;

app.get('/numbers/:param', (req, res) => {
  const { param } = req.params;

  let numbers = [];

  if (param === 'primes') {
    numbers = getPNumbers();
  } else if (param === 'fibo') {
    numbers = getFSeries();
  } else if (param === 'odd') {
    numbers = getONumbers();
  } else {
    return res.status(400).json({ error: 'Invalid parameter' });
  }

  res.json({ numbers });
});


function getPNumbers() {

  const primes = [];

    function isPrime(num) {
      if (num <= 1) {
        return false;
      }

      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          return false;
        }
      }
  
      return true;
    }
  
    for (let i = 2; i <= 50; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    return primes;
}

function getFSeries() {
  
  const fibonacciSeries = [0, 1];

  if (50 <= 1) {
    return fibonacciSeries.slice(0, 50 + 1);
  }

  let prev = 0;
  let current = 1;

  while (current <= 50) {
    const next = prev + current;
    fibonacciSeries.push(next);
    prev = current;
    current = next;
  }

  return fibonacciSeries;
}

function getONumbers() {
  const odd = [];
  for (let i = 1; i <= 50; i++){
    if (i % 2 != 0) {
      odd.push(i);
    }
  }
  return odd;
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
