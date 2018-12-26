const path=require('path');
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const fs = require('fs');
const srcRoot=path.resolve(__dirname,'src');
const distPath=path.resolve(__dirname,'dist');
const pageDir=path.resolve(srcRoot,'page');
const mainFile='index.js';
function getHtmlArray(entryMap) {
    let htmlArray=[];
    Object.keys(entryMap).forEach((key)=>{
        let fullPathName=path.resolve(pageDir,key);
        let fileName=path.resolve(fullPathName,key+'.html');
        if(fs.existsSync(fileName)){
            htmlArray.push(new HtmlWebpackPlugin({
                filename:key+'.html',
                template:fileName,
                chunks:[key]
            }))
        }
    });
    return htmlArray
}
function getEntry() {
    let entryMap={};
    fs.readdirSync(pageDir).forEach((pathname)=>{
        let fullPathName=path.resolve(pageDir,pathname);
        let stat=fs.statSync(fullPathName);
        let fileName=path.resolve(fullPathName,mainFile);
        if(stat.isDirectory()&&fs.existsSync(fileName)){
            entryMap[pathname]=fileName
        }
    });
    return entryMap
}
const entryMap=getEntry();
const htmlArray=getHtmlArray(entryMap);
module.exports={
    mode:'production',
    entry:entryMap,
    resolve: {
        alias: {
            component:path.resolve(srcRoot,'component')
        },
        extensions: ['.js','.jsx']
    },
    output:{
        path:distPath,
        filename:'js/[name].min.js',
    },


    module:{
        rules:[
            {test:/\.(js|jsx)$/,use:[{loader:'babel-loader'}],include:srcRoot},
            //{test:/\.css$/,use:['style-loader','css-loader'],include:srcRoot},
            {test:/\.scss$/,use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',{
                loader: "sass-resources-loader",
                options: {
                    resources:srcRoot+'/component/common.scss'
                }
            }],include:srcRoot},
            {test:/\.(png|jpg|jpeg)$/,use:'url-loader?limit=5000&name=./images/[name].[hash].[ext]',include:srcRoot}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/static', to: path.resolve(distPath,'static'), force:true},
            //{ from: '**/*', to: '/absolute/path/to/dest/' }
        ]),
        new OptimizeCSSAssetsPlugin(),
        new CleanWebpackPlugin([distPath]),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
    ].concat(htmlArray)
}