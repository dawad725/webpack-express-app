const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require("./webpack.common");


module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "!!raw-loader!" + path.join(__dirname, "./views/index.ejs"),
            filename: "index.ejs"
        }),
    ],
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }

}); 