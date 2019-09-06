const webpack = require('webpack')
const path = require('path')
const config = require('sapper/config/webpack.js')
const pkg = require('./package.json')

const sveltePreprocess = require('svelte-preprocess')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

const alias = { svelte: path.resolve('node_modules', 'svelte') }
const extensions = ['.mjs', '.js', '.json', '.svelte', '.html']
const mainFields = ['svelte', 'module', 'browser', 'main']

module.exports = {
    client: {
        entry: config.client.entry(),
        output: config.client.output(),
        resolve: { alias, extensions, mainFields },
        module: {
            rules: [
                {
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            dev,
                            hydratable: true,
                            hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
                            preprocess: sveltePreprocess({
                                scss: true,
                                pug: true,
                            }),
                        },
                    },
                },
                {
                    test: /\.(ico|png|jp(e*)g|svg)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8000, // Convert images < 8kb to base64 strings
                                name: 'images/[name].[ext]',
                            },
                        },
                    ],
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
        mode,
        plugins: [
            // pending https://github.com/sveltejs/svelte/issues/2377
            // dev && new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
        ].filter(Boolean),
        devtool: dev && 'inline-source-map',
    },

    server: {
        entry: config.server.entry(),
        output: config.server.output(),
        target: 'node',
        resolve: { alias, extensions, mainFields },
        externals: Object.keys(pkg.dependencies).concat('encoding'),
        module: {
            rules: [
                {
                    test: /\.(svelte|html)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            css: false,
                            generate: 'ssr',
                            dev,
                            preprocess: sveltePreprocess({
                                scss: true,
                                pug: true,
                            }),
                        },
                    },
                },
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
        mode: process.env.NODE_ENV,
        performance: {
            hints: false, // it doesn't matter if server.js is large
        },
    },

    serviceworker: {
        entry: config.serviceworker.entry(),
        output: config.serviceworker.output(),
        mode: process.env.NODE_ENV,
    },
}
