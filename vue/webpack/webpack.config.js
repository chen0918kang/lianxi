const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlPlugin({
    template:'./src/index.html',
    filename:'./index.html',
})


const {CleanWebpackPlugin}=require('clean-webpack-plugin')
module.exports = {
    // 在生产下省略devtool 提高安全性 或者使用 nosources-source-map
    devtool:'nosources-source-map',
    mode:'development',
    entry: path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'js/bundle.js',
    },
    plugins:[htmlPlugin,new CleanWebpackPlugin()],
    devServer:{
        open:true,
        host:'127.0.0.1',
        port:80,
    },
    module:{
        rules:[
            {
                test:/\.css$/,use:['style-loader','css-loader']
            },
            {
                test:/\.less$/,use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.jpg|png|gif$/, use:'url-loader?limit=22000&outputPath = images',
                
            },
            {
                test:/\.js$/, use:'babel-loader',exclude: /node_modules/
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.join(__dirname,'./src/')
        }
    }

}