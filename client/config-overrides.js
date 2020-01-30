const {
  override,
  addLessLoader,
  addWebpackAlias,
  fixBabelImports
} = require('customize-cra')

const path = require('path')

const resolve = dir => path.join(__dirname, '.', dir)
const lessToJS = require("less-vars-to-js");
const rewiredSourceMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  return config
}
const fs = require("fs");
const themeVariables = lessToJS(
  fs.readFileSync(
    path.resolve(__dirname, "./src/assets/antd-custom.less"),
    "utf8"
  )
);

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeVariables
  }),
  addWebpackAlias({
    '~': resolve('src')
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  rewiredSourceMap()
)