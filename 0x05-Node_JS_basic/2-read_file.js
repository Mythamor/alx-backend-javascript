const fs = require('fs');

function countStudents (path) {
  try {
    // Read the CSV file synchronously
    const data = fs.readFileSync(path, 'utf8').trim().split('\n');

    // Remove header (first line)
    data.shift();

    // Initialize an object to store counts for each field
    const fieldCounts = {};

    // Loop through each line and process student data
    data.forEach(line => {
      const [firstname, lastname, age, field] = line.split(',').map(item => item.trim());
      if (fieldCounts[field]) {
        fieldCounts[field].push(firstname);
      } else {
        fieldCounts[field] = [firstname];
      }
    });

    // Calculate total number of students
    const totalStudents = Object.values(fieldCounts).flat().length;

    // Output number of students and counts for each field
    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(fieldCounts)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    // Throw an error if the database is not available
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
