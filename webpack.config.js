const path = require('path');
const Html = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/
            },
            {
                test: /\.png$/,
                use: 'file-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js', '.png']
    },
    plugins: [
        new Html({
            template: path.resolve(__dirname, 'src/index.html'),
            inject: 'body'
        })
    ],
    devtool: 'inline-source-map'
}
