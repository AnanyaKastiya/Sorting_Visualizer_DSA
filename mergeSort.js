export async function mergeSort(arr, update, sleep, delay) {
  async function merge(l, m, r) {
    const n1 = m - l + 1;
    const n2 = r - m;
    const L = arr.slice(l, m + 1);
    const R = arr.slice(m + 1, r + 1);
    let i = 0, j = 0, k = l;
    while (i < n1 && j < n2) {
      arr[k++] = L[i] <= R[j] ? L[i++] : R[j++];
      update();
      await sleep(delay);
    }
    while (i < n1) {
      arr[k++] = L[i++];
      update();
      await sleep(delay);
    }
    while (j < n2) {
      arr[k++] = R[j++];
      update();
      await sleep(delay);
    }
  }

  async function sort(l, r) {
    if (l < r) {
      const m = Math.floor((l + r) / 2);
      await sort(l, m);
      await sort(m + 1, r);
      await merge(l, m, r);
    }
  }

  await sort(0, arr.length - 1);
}
