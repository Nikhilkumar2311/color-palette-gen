function randomColorHex() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0').toUpperCase();
}

function randomPalette(count = 5) {
  const colors = [];
  for (let i = 0; i < count; i++) {
    colors.push(randomColorHex());
  }
  return colors;
}

module.exports =  { randomPalette };
