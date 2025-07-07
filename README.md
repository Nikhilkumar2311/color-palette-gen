# 🎨 color-palette-gen

A lightweight Node.js utility for generating random color palettes, checking color contrast (WCAG), and mapping palettes to Tailwind CSS-compatible keys.

---

## ✨ Features

- Generate random hex color palettes
- Check WCAG contrast ratio between two colors
- Generate Tailwind CSS style color mappings

---

## 🚀 Installation

```bash
npm install color-palette-gen
```

---

## 📦 Usage

```js
const {
  randomPalette,
  contrastCheck,
  generateTailwindColors,
} = require("color-palette-gen");

// Generate random palette
const palette = randomPalette(5);
console.log("Palette:", palette);

// Check contrast
const contrast = contrastCheck("#000000", "#FFFFFF");
console.log("Contrast:", contrast);

// Tailwind mapping
const tailwindColors = generateTailwindColors(palette);
console.log("Tailwind Colors:", tailwindColors);
```

---

## 📝 API

### `randomPalette(count)`

Generates an array of random hex color strings.

| Param   | Type     | Default | Description                  |
| ------- | -------- | ------- | ---------------------------- |
| `count` | `number` | `5`     | Number of colors to generate |

---

### `contrastCheck(hex1, hex2)`

Returns the contrast ratio and whether it passes WCAG AA/AAA.

| Param  | Type     | Description               |
| ------ | -------- | ------------------------- |
| `hex1` | `string` | First color (hex format)  |
| `hex2` | `string` | Second color (hex format) |

✅ **Returns**

```js
{
  ratio: number,       // Contrast ratio
  passesAA: boolean,   // True if ≥ 4.5
  passesAAA: boolean   // True if ≥ 7
}
```

---

### `generateTailwindColors(colors)`

Maps an array of colors to Tailwind-like numeric keys.

| Param    | Type       | Description         |
| -------- | ---------- | ------------------- |
| `colors` | `string[]` | Array of hex colors |

✅ **Returns**

```js
{
  100: '#A1C6EA',
  200: '#F76C6C',
  ...
}
```

---

## 💡 Example

```js
const {
  randomPalette,
  contrastCheck,
  generateTailwindColors,
} = require("color-palette-gen");

const palette = randomPalette(3);
console.log(palette);

console.log(contrastCheck("#123456", "#654321"));

console.log(generateTailwindColors(palette));
```

---

## 🤝 Contributing

PRs and suggestions welcome! Feel free to open an issue or submit improvements.

---
