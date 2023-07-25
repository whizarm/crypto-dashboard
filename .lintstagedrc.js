module.exports = {
  '*.{tsx,ts,js,jsx}': [() => 'eslint src --cache --fix --max-warnings=0'],
  '*.{tsx,ts}': [() => 'tsc -p tsconfig.json --noEmit'],
};
