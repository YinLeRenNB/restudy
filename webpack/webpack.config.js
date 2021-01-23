const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const{CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {

    // production：生产环境 development：开发坏境
    mode: 'development',

    // 入口文件
    entry: { //相对路径
        index: './src/index.js',
        main: './src/main.js'
    },

    // 配置loader
    module: {
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']

            }
        ]
    },

    // 出口文件
    output: {
        // 需要绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    devServer:{
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        port: 8083,

    },

    plugins: [
        new HtmlPlugin({
            minify: {
                removeAttributeQuotes: true,
                // collapseWhitespace:true,
            },
            hash: true,
            template: './src/index.html'
        }),
        // 每次构建重新打包dist文件夹 可删除不需要文件
        new CleanWebpackPlugin(),
    ]
}