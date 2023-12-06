interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Details on 2 students
const firstStudent: Student = {
  firstName: "Maxine",
  lastName: "Wanjohi",
  age: 23,
  location: "Mombasa"
}


const secondStudent: Student = {
  firstName: "Wairitu",
  lastName: "Kamau",
  age: 19,
  location: "Webuye"
}


// An array of students
const studentsList = [firstStudent, secondStudent];

//Render a table for each of the elements in the array
//Append a new row to the table

const table = document.getElementById('studentTable') as HTMLTableElement;

studentsList.forEach(student) => {
  const row = table.insertRow();
  const firstNameCell = row.insertCell(0);
  const loactionCell = row.insertCell(1);

  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

