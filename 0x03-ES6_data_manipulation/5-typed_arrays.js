export default function createInt8TypedArray(length, position, value) {
  // Check if the position is withing the range of the array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create an array buffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView to access and manipulate the buffer
  const view = new DataView(buffer);

  // Set the Int8 value at the specified position
  view.setInt8(position, value);

  return view;
}
