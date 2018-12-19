const path=require('path');
const webpack=require('webpack')
const HtmlWebpackPlugin=require('html-webpack-plugin');
const fs = require('fs');
const srcRoot=path.resolve(__dirname,'src');
const devPath=path.resolve(__dirname,'dev');
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
    mode:'development',
    devServer: {
        contentBase:devPath,
        port: 3005,
        host: '192.168.0.47',
        overlay: {
            errors: true,
        },
        hot: true,
    },
    entry:entryMap,
    resolve: {
        alias: {
            component:path.resolve(srcRoot,'component')
        },
        extensions: ['.js','.jsx']
    },
    output:{
        path:devPath,
        filename:'[name].min.js'
    },
    module:{
        rules:[
            {test:/\.(js|jsx)$/,use:[{loader:'babel-loader'}],include:srcRoot},
            {test:/\.css$/,use:['style-loader','css-loader'],include:srcRoot},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader',{
                loader: "sass-resources-loader",
                options: {
                    resources:srcRoot+'/component/common.scss'
                }
            }],include:srcRoot},
            {test:/\.(png|jpg|jpeg)$/,use:'url-loader?limit=8192',include:srcRoot}
        ]
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ].concat(htmlArray)
}