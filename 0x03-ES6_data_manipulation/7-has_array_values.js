// should return true if all the values in the array are present in the set

export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
