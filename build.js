const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');

const input = path.join(__dirname, 'styles', 'styles.css');
const output = path.join(__dirname, 'styles', 'output.css');

fs.readFile(input, 'utf8', (err, css) => {
  if (err) throw err;
  postcss([tailwindcss])
    .process(css, { from: input, to: output })
    .then(result => {
      fs.writeFileSync(output, result.css);
      console.log('output.css gerado com sucesso!');
    });
});
