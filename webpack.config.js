const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    //entry:'./src/com/Main.js',
    entry:'./src/com/Main.ts',
    mode:"development",
    output: {
        path: __dirname + '/dist', //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        filename: 'js/[name].js',     //每个页面对应的主js的生成配置
        chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:"typescript webassembly quick start!",
            template: './src/index.html'
        })
    ],
    module:{
        rules:[
            {
                test:/\.ts/,
                loader:'ts-loader',
                include:[
                    path.resolve(__dirname,'src/com')
                 ]
            },
            {
                test: /\.ts$/,
                loader: 'assemblyscript-typescript-loader',
                include:[
                    path.resolve(__dirname,'src/assembly')
                ],
                options: {
                    sourceMap: true,
                    name: `assembly/[name].[hash:8].wasm`
                }
            }
        ]
    },
    devServer: {
        contentBase: '/',
        host: '192.168.40.144',
        port: 8081, //默认8080
        inline: true //可以监控js变化
    }
};