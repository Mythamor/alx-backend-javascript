export default function cleanSet(set, startString) {
  if (startString === '' || startString === undefined || startString.length === 0) {
    return '';
  }

  const cleanedValues = [];

  set.forEach((element) => {
    if (element.startsWith(startString)) {
      const cleanedElement = element.substring(startString.length);
      cleanedValues.push(cleanedElement);
    }
  });
  return cleanedValues.join('-');
}
