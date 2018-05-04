import sourceMaps from 'rollup-plugin-sourcemaps';
import babel from 'rollup-plugin-babel';
import camelCase from 'lodash.camelcase';

const pkg = require('./package.json');
const libraryName = 'routing-number-validator';

export default {
  input: `src/${libraryName}.js`,
  output: [
    {
      file: 'pkg.main',
      name: camelCase(libraryName),
      format: 'umd'
    },
    {
      file: 'pkg.module',
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
