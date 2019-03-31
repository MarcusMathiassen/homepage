const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contentHash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: './src/template.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contentHash].css',
        }),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.sass$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
})
