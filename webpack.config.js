/**
 * Created by nnnyyy on 2018-11-21.
 */

const webpack = require('webpack');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const env = process.env.NODE_ENV;
const sourceMap = env === 'development';

const devServerConfig = {
    proxy: {
        "**": "http://127.0.0.1:3000"
    }
};

const cssLoader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
};

const vueLoader = {
    test: /\.vue$/,
    loader: 'vue-loader',
    include: [ path.join(__dirname,"src"), path.join(__dirname, 'node_modules/webpack-dev-server/client') ]
};

const babelLoader = {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [ path.join(__dirname,"src"), path.join(__dirname, 'node_modules/webpack-dev-server/client') ]
};

const config = {
    context: path.join(__dirname, "src"),
    entry: "./main.js",
    devtool: 'inline-source-map',
    devServer: devServerConfig,
    module: {
        rules: [
            cssLoader,
            vueLoader,
            babelLoader
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}

module.exports = config;