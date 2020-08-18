const { override, fixBabelImports, addPostcssPlugins, useBabelRc, addLessLoader } = require('customize-cra')
const postcssPresetEnv = require('postcss-preset-env')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
  }),
  useBabelRc(),
  addPostcssPlugins([
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
  ]),
  config => {
    if (config.mode === 'production') {
      config.devtool = false
    }
  }
)
