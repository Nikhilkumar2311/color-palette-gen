function hexToRgb(hex) {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function contrastCheck(hex1, hex2) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);

  const L1 = luminance(c1.r, c1.g, c1.b);
  const L2 = luminance(c2.r, c2.g, c2.b);

  const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);

  return {
    ratio: +ratio.toFixed(2),
    passesAA: ratio >= 4.5,
    passesAAA: ratio >= 7
  };
}

module.exports = { contrastCheck };
