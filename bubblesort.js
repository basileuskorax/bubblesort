const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
} 

function bubbleSort(arr) {
    let swapped = false
    do {
        swapped = false
        for (let i=0; i<arr.length; i++) {
            if (arr[i+1] && arr[i] > arr[i+1]) {
                swapped = true
                swap(arr, i, i+1)
            }
        }
    } while (swapped)
    return arr
}