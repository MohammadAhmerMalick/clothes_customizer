module.exports = {
  // Type check TypeScript files
  '*/.(ts|tsx)': () => 'yarn tsc --noEmit',

  '*.{js,ts,tsx,json,md,prettierrc,scss,md}':
    'prettier --write --config .prettierrc .',

  '*.{js,ts,tsx}': 'eslint .',
}
