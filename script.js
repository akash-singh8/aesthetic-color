/**
 * Generates a random aesthetic color in the RGB format.
 *
 * @returns {string} A random color in the format of "rgb(red, green, blue)".
 */
function generateColor() {
  const red = Math.floor(Math.random() * 95 + 160);
  const green = Math.floor(Math.random() * 95 + 160);
  const blue = Math.floor(Math.random() * 95 + 160);

  return `rgb(${red}, ${green}, ${blue})`;
}

module.exports = {
  generateColor,
};
