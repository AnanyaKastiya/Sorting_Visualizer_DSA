export async function insertionSort(arr, update, sleep, delay) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i], j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      update();
      await sleep(delay);
    }
    arr[j + 1] = key;
    update();
    await sleep(delay);
  }
}
