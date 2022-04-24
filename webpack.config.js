const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/push.js',
    output: {
        filename: 'push.js',
        path: path.join(__dirname, 'dist')
    }
};