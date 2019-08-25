const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
})
