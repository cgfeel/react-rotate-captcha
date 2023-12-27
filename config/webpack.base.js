module.exports = {
    resolve: {
        // 定义 import 引用时可省略的文件后缀名
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js(x?)$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                exclude: /node_modules/,
                test: /\.ts(x?)$/,
                use: [
                    { loader: 'babel-loader' },
                    { loader: 'ts-loader' }
                ]
            },
            {
                test: /\.svg$/,
                resourceQuery: /abc/,
                type: 'asset',
            },
            {
                test: /\.svg$/,
                resourceQuery: { not: [/abc/] },
                use: ['@svgr/webpack'],
            }
        ]
    },
};
