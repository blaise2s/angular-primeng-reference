module.exports = {
  '**/*.{ts,js}': 'eslint --cache --fix',
  '**/*.scss': 'stylelint --fix',
  '**/*.{ts,js,scss,html,json,md,yml,yaml}':
    'prettier --write --ignore-unknown',
};
