const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function bubbleSort(arr) {
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] && arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        sorted = false;
      }
    }
  }

  return arr;
}

// def bubble_sort!
// # Without a proc
// sorted = false
// until sorted
//   sorted = true

//   each_index do |i|
//     next if i + 1 == self.length
//     j = i + 1
//     if self[i] > self[j]
//       sorted = false
//       self[i], self[j] = self[j], self[i]
//     end
//   end
// end

//   do {
//     swapped = false;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i + 1] && arr[i] > arr[i + 1]) {
//         swapped = true;
//         arr[i] = arr[i + 1] + ((arr[i + 1] = arr[i]), 0);
//         // XOR swap alogrithm works the same as the swap() function;
//         // swap(arr, i, i + 1);
//       }
//     }
//   } while (swapped);
