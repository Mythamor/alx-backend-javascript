#!/usr/bin/node

// Display welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Read user input from stdin
const handleInput = (input) => {
  const name = input.toString();

  // Display user's name
  process.stdout.write(`Your name is: ${name}`);

  if (!process.stdin.isTTY) {
    process.exit();
  }
};

// Check if there's a piped input
if (process.stdin.isTTY) {
  process.stdin.once('data', handleInput);
} else {
  process.stdin.on('data', handleInput);

  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
