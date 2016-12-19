const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './js/app',
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        publicPath: '/build/',
        sourceMapFilename: '[file].map'
    },
    sassLoader: {
        includePaths: [ 'styles' ]
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: [ path.join(__dirname, 'styles') ],
                loader: ExtractTextPlugin.extract(
                    'style', // The backup style loader
                    ['css?sourceMap!sass?sourceMap', 'postcss', 'sass']
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/app.css'),
        new CopyWebpackPlugin([
            {from: 'assets/', to: 'assets/'}
        ]),
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map'
};
