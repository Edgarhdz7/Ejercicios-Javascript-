function bubbleSort(arr) {
    let swapped = false;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          // Swap elements
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
    return arr;
  }
  
  const numbers = [3, 6, 12, 5, 100, 1];
  const sortedNumbers = bubbleSort(numbers);
  console.log(sortedNumbers);
  