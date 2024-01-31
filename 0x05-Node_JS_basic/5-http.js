const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = 1245;

// Read the database file asynchronously
function readDatabaseFile(databaseFilepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(databaseFilepath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data.trim());
      }
    });
  });
}

// Create the HTTP Server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Set URL path according to the request
  switch (req.url) {
    case '/':
      // Root URL
      res.end('Hello Holberton School!');
      break;

    // Read the db file and display its contents
    case '/students':
      readDatabaseFile('database.csv')
        .then((data) => {
          const studentsList = data.split('\n').filter((line) => line.trim() !== '');
          const studentsCount = studentsList.length - 1;
          const csStudents = [];
          const sweStudents = [];
          studentsList.slice(1).forEach((student) => {
            /* eslint-disable-next-line no-unused-vars */
            const [firstname, lastname, age, field] = student.split(',');
            if (field === 'CS') {
              csStudents.push(firstname);
            } else if (field === 'SWE') {
              sweStudents.push(firstname);
            }
          });
          res.end(`This is the list of our students\nNumber of students: ${studentsCount}\nNumber of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}\nNumber of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
        })
        .catch((error) => {
          res.end(error.message);
        });
      break;
    default:
      // Handle URLs with 404
      res.statusCode = 400;
      res.end('404 Not Found');
  }
});

app.listen(port, host, () => {});

module.exports = app;
