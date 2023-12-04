export default function getListStudentIds(objects) {
  // Check if objects is an array
  if (!Array.isArray(objects)) {
    return [];
  }

  // Use map to get the array of ids
  const studentIds = new Map(objects.map((obj) => [obj.id, obj]));
  const result = Array.from(studentIds.keys());

  return result;
}
