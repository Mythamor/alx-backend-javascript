// Import required modules
const express = require('express');
const fs = require('fs').promises;

// Create an Express application
const app = express();
const PORT = 1245;

// Define the path to the database file
const databaseFilePath = process.argv[2];

// Define middleware to handle requests to the root URL '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define middleware to handle requests to the '/students' URL
app.get('/students', async (req, res) => {
  try {
    // Read the database file asynchronously
    const data = await fs.readFile(databaseFilePath, 'utf-8');

    // Parse the data and format the response
    const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
    const studentsCount = lines.length - 1;
    const csStudents = [];
    const sweStudents = [];

    lines.slice(1).forEach((line) => {
      /* eslint-disable-next-line no-unused-vars */
      const [firstname, lastname, age, field] = line.split(',').map((item) => item.trim());
      if (field === 'CS') {
        csStudents.push(firstname);
      } else if (field === 'SWE') {
        sweStudents.push(firstname);
      }
    });

    const response = `This is the list of our students\nNumber of students: ${studentsCount}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`;

    // Send the response
    res.send(response);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(PORT, () => {
});

// Export the Express app
module.exports = app;
