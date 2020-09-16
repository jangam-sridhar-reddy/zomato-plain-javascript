const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : "./src/assets/scripts/app.js",
    output : {
        filename : "main.bundle.js",
        path : path.resolve(__dirname, "docs")
    },
    module : {
        rules : [
            {
                test : /\.html$/,
                use : ["html-loader"]
            },
            {
                test : /\.(svg|jpg|jpeg|png)$/,
                use : {
                    loader : "file-loader",
                    options : {
                        name : "[name].[hash].[ext]",
                        outputPath : "images"

                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            
            },
        ]
    },
    plugins : [ new HtmlWebpackPlugin({ template: "./src/index.html" })]
};