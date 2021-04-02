const path = require('path')
const webpack = require('webpack')

const mode = process.env.NODE_ENV || 'production'

module.exports = {
    entry: './src/index.ts',
    output: {
        libraryTarget: 'commonjs',
        filename: `index.js`,
        path: path.join(__dirname, 'dist'),
    },
    mode,
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
}
