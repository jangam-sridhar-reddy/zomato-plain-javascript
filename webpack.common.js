const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

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
                test : /\.(jpg|jpeg|png)$/,
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
            {
                test: /\.svg/i,

                // from all svg images
                // include only sprite image
                include: /.*sprite\.svg/,

                use: [
                    {
                        loader: 'svg-sprite-loader',
                        options: {
                            publicPath: '',
                        }
                    },
                ],
            }
        ]
    },
    plugins : [ 
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new SpriteLoaderPlugin()
    ]
};