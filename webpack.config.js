var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dist/js',
        filename: 'bundle.js',
        publicPath: "js"
    },
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000
	},
    module: {
        loaders: [
            {
                test: /\.js$/,
                exlude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader'
            }
        ]    
    }
}