const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: ['whatwg-fetch','./frontend/js/app.js'],
    output: {
        filename: 'bundle.js',
        publicPath: "static/",
        path: path.resolve(__dirname, 'static')
    },
    plugins: [
        new CleanWebpackPlugin(['static'])
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(jspn)$/,
                use: [
                    'json-loader'
                ]
            }
        ]
    }
};