export default function getStudentsByLocation(list, city) {
  // Filter the array by location
  const result = list.filter((student) => student.location === city);

  return result;
}
