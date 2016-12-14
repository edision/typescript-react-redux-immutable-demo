const path = require("path");
const webpack = require("webpack");
const { CheckerPlugin } = require("awesome-typescript-loader");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const src = path.resolve(__dirname, "../src");
let config = {
    // 入口文件
    entry: {
        "vendor": ["react", "react-dom"],
        "bundle": path.join(src, "index.tsx")
    },
    // 输出目录
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
            CONTAINERS: path.join(src, "containers"),
            REDUCERS: path.join(src, "reducers")
        }
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader"
        }]
    },
    plugins: [
        new CheckerPlugin()
    ]
};

let isProduction = process.env.NODE_ENV === "production";
if (!isProduction) {
    config.devtool = "eval-source-map";
    config.module.preLoaders = [{
        test: /\.js$/,
        loader: 'source-map-loader'
    }];
    // 开发插件
    // 导入模块时，大小写错误时，编译提示错误
    config.plugins.push(new CaseSensitivePathsPlugin());
    // webpack-dev-server 启动时安装了npm 模块，自动重启webpack-dev-server
    config.plugins.push(new WatchMissingNodeModulesPlugin(path.resolve(__dirname, "../node_modules")));
} else {
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    config.plugins.push(new webpack.optimize.DedupePlugin());
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }));
}


module.exports = config;