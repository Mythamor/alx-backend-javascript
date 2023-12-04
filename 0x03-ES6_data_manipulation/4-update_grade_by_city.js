export default function updateStudentGradeByCity(list, city, newGrades) {
  // Filter students by city
  const filteredList = list.filter((list) => list.location === city);

  // Map through filtered students & upgrade their grades
  const updatedList = filteredList.map((list) => {
    const matchingGrade = newGrades.find((grade) => grade.studentId === list.id);

    // Check if a matching grade is found
    const newList = list;
    if (matchingGrade) {
      newList.grade = matchingGrade.grade;
    } else {
      newList.grade = 'N/A';
    }
    return newList;
  });

  return updatedList;
}
