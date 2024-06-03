const fs = require('fs');
const jsonfile = require('jsonfile');

const pathFile = 'src/assets/icons/selection.json';

jsonfile.readFile(pathFile, (err, data) => {
  if (err) {
    console.log(' ~ file: icons.js:7 ~ jsonfile.readFile ~ err:', err);
    return;
  }
  const fixNameIcons = data.icons.map(value => {
    const fixValues = value;
    fixValues.properties.name = value.properties.name.toLowerCase();
    return fixValues;
  });
  const fixedPack = { ...data, icons: fixNameIcons };
  // jsonfile.writeFileSync('src/assets/icons/selection.json', fixedPack);
  const nameIcons = fixedPack.icons.map(value => value.properties.name);
  let enumIcons = nameIcons.join("'\n  | '");
  enumIcons = `'${enumIcons}'`;
  fs.writeFileSync(
    'src/assets/icons/types.ts',
    `export type nameIcons = ${enumIcons};\n`,
  );
  console.log('🚀🚀🚀🚀FIM | ', `${nameIcons.length} Icones processados`);
});
