// Details on 2 students
var firstStudent = {
    firstName: "Maxine",
    lastName: "Wanjohi",
    age: 23,
    location: "Mombasa"
};
var secondStudent = {
    firstName: "Wairitu",
    lastName: "Kamau",
    age: 19,
    location: "Webuye"
};
// An array of students
var studentsList = [firstStudent, secondStudent];
//Render a table for each of the elements in the array
//Append a new row to the table
var table = document.getElementById('studentTable');
studentsList.forEach(student);
{
    var row = table.insertRow();
    var firstNameCell = row.insertCell(0);
    var loactionCell = row.insertCell(1);
    firstNameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
}
;
