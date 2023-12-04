export default function getStudentIdsSum(list) {
  const sumIds = list.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id, 0,
  );

  return sumIds;
}
