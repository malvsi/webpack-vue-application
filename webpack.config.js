const path = require('path');
const htmlWebpack = require('html-webpack-plugin')
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',
    },
    devServer: {
        open: true,
        hot: true,
        port: 8086,
        contentBase: 'src',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpack({
            template: './src/index.html', 
            filename: 'index.html',
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            {test: /\.vue$/, use: 'vue-loader'},
            {test: /\.(ttf)/, use: 'url-loader'},
            {test: /\.less$/, use: ['style-loader','css-loader','less-loader']}
        ]
    },
    resolve: {
        alias: {
            // "vue$": "vue/dist/vue.esm.js"
        }
    }
}