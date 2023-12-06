export default function hasValuesFromArray(set, array) {
  // Check if all elements within an array exist within the set
  return array.every((value) => set.has(value));
}
