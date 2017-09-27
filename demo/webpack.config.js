/* eslint-disable camelcase,no-var */
require('babel-register');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        new ExtractTextPlugin('build-styles.css')
    ],

    devServer: {
        contentBase: __dirname
    },

    entry: {
        build: __dirname + '/demo.jsx'
    },
    output: {
        path: __dirname,
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    devtool: 'source-map',

    resolve: {
        modules: [__dirname + '/../', 'node_modules'],
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|jpg|png|gif|ico)(\?(.*))?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    }
};
