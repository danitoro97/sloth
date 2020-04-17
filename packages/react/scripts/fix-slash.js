const fs = require('fs');
const path = require('path');

const componentsFolder = path.resolve('./src/components.ts');
console.log(componentsFolder);

try {
  const data = fs.readFileSync(componentsFolder, 'utf8');
  const newData = data.replace(/\\/g, '/');
  fs.writeFileSync(componentsFolder, newData);
} catch (err) {
  console.error(err);
}
