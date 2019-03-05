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