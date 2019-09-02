const pkg = require('./package.json');
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/scroll-position.js',
  plugins: [
    resolve(),
    commonjs(),
    babel({ exclude: 'node_modules/**' }),
    terser()
  ],
  output: [
    { file: pkg.main, name: 'scroll-position', format: 'umd' },
    { file: pkg.module, format: 'es' }
  ]
};