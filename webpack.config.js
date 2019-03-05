var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    mode: 'production',

    entry: './index.js',
    output: {

        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    plugins: [

        new HtmlWebpackPlugin()
    ],

    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
};