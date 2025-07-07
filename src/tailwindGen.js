function generateTailwindColors(colors) {
  const steps = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const output = {};

  for (let i = 0; i < Math.min(colors.length, steps.length); i++) {
    output[steps[i]] = colors[i];
  }

  return output;
}

module.exports = { generateTailwindColors };
