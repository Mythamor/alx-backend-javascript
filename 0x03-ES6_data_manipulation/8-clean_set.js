export default function cleanSet(set, startString) {
  if (startString === '') {
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
