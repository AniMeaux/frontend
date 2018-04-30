const head = require('./src/config/head');
const modules = require('./src/config/modules');
const plugins = require('./src/config/plugins');
const build = require('./src/config/build');
const css = require('./src/config/css');
const loading = require('./src/config/loading');

module.exports = {
  head,
  srcDir: 'src/',
  css,
  modules,
  plugins,
  build,
  loading,
};
