
import path from "path"

module.exports = {
    entry: {
        server: "./src/index.ts",
    },
    devtool: 'inline-source-map',
    output: {
        path: path.join(__dirname, "build"),
        filename: "index.js",
    },
    resolve: {
        extensions: [ '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
        ],
    },
};