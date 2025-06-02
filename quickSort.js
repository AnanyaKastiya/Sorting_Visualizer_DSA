export async function quickSort(arr, update, sleep, delay) {
  async function partition(low, high) {
    let pivot = arr[high], i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        update();
        await sleep(delay);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    update();
    await sleep(delay);
    return i + 1;
  }

  async function sort(low, high) {
    if (low < high) {
      let pi = await partition(low, high);
      await sort(low, pi - 1);
      await sort(pi + 1, high);
    }
  }

  await sort(0, arr.length - 1);
}
