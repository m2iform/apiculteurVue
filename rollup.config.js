export default {
  input: 'src/index.js', // ou votre point d'entrée
  output: {
    file: 'dist/bundle.js',
    format: 'cjs', // ou 'es', selon votre besoin
  },
  external: [
    'core-js/modules/es.array.for-each',
    // ajoutez d'autres modules externes si nécessaire
  ],
  plugins: [
    // vos plugins ici, comme babel, resolve, etc.
  ],
};
