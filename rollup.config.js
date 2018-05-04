import sourceMaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';
import camelCase from 'lodash.camelcase';

const libraryName = 'routing-number-validator';

export default {
  input: `src/${libraryName}.js`,
  output: [
    {
      file: 'dist/routing-number-validator.umd.js',
      name: camelCase(libraryName),
      format: 'umd'
    },
    {
      file: 'dist/routing-number-validator.es5.js',
      format: 'es'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    sourceMaps()
  ]
};
