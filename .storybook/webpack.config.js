const jsonImporter = require('node-sass-json-importer')
const path = require('path')

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  defaultConfig.module.rules.push({
    test: /.scss$/,
    use: [
      {
        loader: 'style-loader' // creates style nodes from JS strings
      },
      {
        loader: 'css-loader' // translates CSS into CommonJS
      },
      {
        loader: 'sass-loader', // compiles Sass to CSS
        // Apply the JSON importer via sass-loader's options.
        options: {
          importer: jsonImporter
        }
      }
    ]
  })

  defaultConfig.resolve.alias = {
    ...defaultConfig.resolve.alias,
    '@library': path.resolve(__dirname, '../src/library/')
  }

  return defaultConfig
}
