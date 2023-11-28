export default function appendToEachArrayValue(array, appendString) {
  const ofArray = [];

  for (const idx of array) {
    ofArray.push(appendString + idx);
  }

  return ofArray;
}
