// IDE Declaration을 위한 가짜 webpack.config.js (수정 금지)

const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.js', '.json', '.vue'],
    root: path.resolve(__dirname),
    alias: {
      '~': path.resolve(__dirname)
    }
  }
}
