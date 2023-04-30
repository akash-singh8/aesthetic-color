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

/**
 * Random predefined aesthetic color in the RGB format.
 *
 * @returns {string} A predefined aesthetic color in the format of "rgb(red, green, blue)".
 */
function getAestheticColor() {
  const colors = [
    "rgb(200, 234, 255)",
    "rgb(0, 255, 204)",
    "rgb(0, 183, 255)",
    "rgb(255, 158, 3)",
    "rgb(234, 255, 3)",
    "rgb(24, 255, 3)",
    "rgb(255, 3, 221)",
    "rgb(250, 35, 146)",
    "rgb(3, 234, 255)",
    "rgb(211, 35, 250)",
    "rgb(213, 3, 255)",
    "rgb(250, 60, 35)",
    "rgb(185, 250, 35)",
    "rgb(169, 161, 255)",
    "rgb(250, 137, 137)",
    "rgb(156, 250, 137)",
    "rgb(255, 3, 146)",
    "rgb(156, 250, 137)",
    "rgb(232, 32, 229)",
    "rgb(232, 32, 229)",
    "rgb(237, 146, 71)",
    "rgb(237, 201, 71)",
    "rgb(220, 237, 71)",
    "rgb(143, 237, 71)",
    "rgb(71, 237, 140)",
    "rgb(71, 237, 193)",
    "rgb(71, 231, 237)",
    "rgb(71, 207, 237)",
    "rgb(71, 160, 237)",
    "rgb(71, 160, 237)",
    "rgb(237, 71, 223)",
    "rgb(237, 71, 190)",
    "rgb(237, 71, 140)",
    "rgb(237, 71, 96)",
    "rgb(175, 238, 238)",
    "rgb(237, 166, 166)",
  ];

  return colors[Math.floor(Math.random() * 35)];
}

module.exports = {
  generateColor,
  getAestheticColor,
};
