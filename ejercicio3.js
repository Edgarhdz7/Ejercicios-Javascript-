function calculateSumProduct(arr) {
    const sum = arr.reduce((acc, num) => acc + num, 0);
    const product = arr.reduce((acc, num) => acc * num, 1);
    console.log(`Sum: ${sum}, Product: ${product}`);
  }
  
  const numbers = [1, 2, 3, 4];
  calculateSumProduct(numbers);
    