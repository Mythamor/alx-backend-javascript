#!/usr/bin/node

const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        try {
          const lines = data.trim().split('\n').filter((line) => line.trim() !== '');
          lines.shift(); // Remove header

          const fieldCounts = {};

          lines.forEach((line) => {
            /* eslint-disable-next-line no-unused-vars */
            const [firstname, lastname, age, field] = line.split(',').map((item) => item.trim());
            if (fieldCounts[field]) {
              fieldCounts[field].push(firstname);
            } else {
              fieldCounts[field] = [firstname];
            }
          });

          const totalStudents = Object.values(fieldCounts).flat().length;

          console.log(`Number of students: ${totalStudents}`);
          for (const [field, students] of Object.entries(fieldCounts)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
          }

          resolve();
        } catch (error) {
          reject(new Error('Error processing database'));
        }
      }
    });
  });
}

module.exports = countStudents;
