const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = {
    mode: "development",  // 开发模式
    entry: path.join(__dirname, "../src/index.jsx"),  // 入口，处理资源文件的依赖关系
    output: {
        path: path.join(__dirname, "../demo/src"),
        filename: "./index_bundle.js",
    },
    watchOptions: {
        ignored: /node_modules/,
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /.min.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                mode: "global"
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 其他选项
                                        },
                                    ]
                                ]
                            }
                        }
                    },
                    { loader: 'sass-loader' }
                ]
            },
            {
                test: /.min.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, "../demo/src/index.html"),
        })
    ],
    devServer: {
        static: path.join(__dirname, "../demo/src/"),
        compress: true,
        host: '0.0.0.0',
        hot: true,
        port: 8686,    // 启动窗口
        open: false    // 打开浏览器
    },
};
module.exports = merge(devConfig, baseConfig);