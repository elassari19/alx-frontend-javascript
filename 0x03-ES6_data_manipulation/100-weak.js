// should be able to use WeakMap

export function queryAPI(endpoint) {
  const weakMap = new WeakMap();
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= 5)
    throw new Error('Endpoint load is high');
}
