const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    entry: "./public/javascripts/index.js",
    module: {
        rules: [
            {
                test: /\.ejs$/,
                use: ["html-loader"]
            }
        ]
    }

}; 