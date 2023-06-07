import webpack from 'webpack'
import path from 'path'
import { fileURLToPath } from 'url'

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
const isProduction = 'production'

const config = {
    entry: {
        employees: './src/employees.jsx',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve (_dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_mmodules/,
                loader: 'babel-loader',
            },
        ],
    },
    optimization: {
        splitChunks: {
            name: 'vendor',
            chunks: 'all',
        },
    },
    devtool: 'source-map'
}


export default function() {
    if (isProduction) {
        config.mode = 'production'
    } else {
        config.mode = 'development'
    }
    return config
}