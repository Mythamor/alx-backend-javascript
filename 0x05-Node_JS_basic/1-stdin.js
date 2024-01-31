#!/usr/bin/node

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read user input from stdin
if (process.stdin.isTTY) {
  process.stdin.on('data', (data) => {
    const name = data.toString();

    // Display user's name
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (data) => {
    const name = data.toString();

    // Display user's name
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  });

  // Set up listener for process exit event
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
