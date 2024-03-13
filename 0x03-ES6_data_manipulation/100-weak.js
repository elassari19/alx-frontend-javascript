// should be able to use WeakMap

export const queryAPI = (endpoint) => {
  const weakMap = new WeakMap();

  let total = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, total -= -1);
  if (total >= 5) throw new Error('Endpoint load is high');
  return total;
};
