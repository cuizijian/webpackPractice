const path = require('path');
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        main: './src/script/main.js',
        a: './src/script/a.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath: 'https//cdn.com'//线上地址
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'head',
            title: '所得到的',
            minify: {
                removeComments: true,
                collapseInlineTagWhitespace: true
            }
        })
    ]
}