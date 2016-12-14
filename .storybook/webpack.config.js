const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const src = path.resolve(__dirname, "../src");
let config = {
    // 入口文件
    entry: {
        "vendor": ["react", "react-dom"],
        "bundle": path.join(src, "index.tsx")
    },
    // 输出目录
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js",
        publicPath: "/js/"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
        alias: {
            COMPONENTS: path.join(src, "components"),
            ACTIONS: path.join(src, "actions"),
            REDUCERS: path.join(src, "reducers")
        }
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        }],
        preLoaders: [{
            test: /\.js$/,
            loader: 'source-map-loader'
        }]
    },   
    plugins: [
        new CheckerPlugin()
    ]
};


module.exports = config;