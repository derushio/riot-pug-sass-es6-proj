import path from 'path'
import webpack from 'webpack'

export default {
    context: path.join(__dirname, "./src/script/entry"),
    entry: {
        "index": "./index.js"
    },
    output: {
        path: path.join(__dirname, "./dist/script/entry"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tag$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'riot-tag-loader',
                        options: {
                            template: 'pug',
                            debug: true
                        }
                    }
                ]
            },
            {
                test: /\.js|\.tag$/,
                enforce: 'post',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: `es2015-riot`
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.tag']
    },
    plugins: [
        new webpack.ProvidePlugin({ riot: 'riot' })
    ]
}