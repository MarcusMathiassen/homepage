const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
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
        filename: '[name].[contentHash].js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.pug$/,
                include: path.join(__dirname, 'src/templates'),
                loader: ['pug-loader'],
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            },
            {
                test: /\.(woff|woff2|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'resources',
                    },
                },
            },
        ],
    },
}
