const path = require('path')

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: './src/vendor.js',
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src/app'), 'node_modules'],
        alias: {
            '~': path.resolve(__dirname),
            '@': path.resolve(__dirname, 'src/app'),
            utils: path.resolve(__dirname, 'src/app/utils'),
            images: path.resolve(__dirname, 'src/images'),
        },
    },
    output: {
        filename: 'main.[contentHash].js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'images',
                    },
                },
            },
        ],
    },
}
