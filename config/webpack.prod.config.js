const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');    // 引用公共的配置
const MiniCssExtractPlugin = require('mini-css-extract-plugin');    // 用于将组件的css打包成单独的文件输出到`lib`目录中

const prodConfig = {
    mode: 'production',    // 生产模式
    entry: path.join(__dirname, '../src/index.tsx'),
    output: {
        path: path.join(__dirname, '../lib/'),
        filename: "./index_bundle.js",
        libraryTarget: 'umd',    // 采用通用模块定义
        libraryExport: 'default',    // 兼容 ES6 Module、CommonJS 和 AMD 模块规范
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                exclude: /.min.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'global'
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    'postcss-preset-env'
                                ]
                            }
                        },
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.min.css"    // 提取后的css的文件名
        })
    ],
    // 定义外部依赖，避免把react和react-dom打包进去
    externals: {
        react: {
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react',
            amd: 'react'
        },
        "react-dom": {
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom',
            amd: 'react-dom'
        }
    }
};
module.exports = merge(prodConfig, baseConfig);    // 合并配置