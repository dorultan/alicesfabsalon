const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const hotModuleReplacementPlugin = require('webpack-hot-middleware');
const path = require('path');

const config = {
	mode: process.env.NODE_ENV || 'development',
	entry: ['./app/index.js'],
	output: {
		publicPath: "/",
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test:  /\.(png|jpg|gif)$/,
				use: [
		          {
		            loader: 'url-loader',
		            options: {
		              limit: 8192
		            }
		          }
		        ]
			},

			{
				test: /\.less?/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader'
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new MiniCssExtractPlugin({
			name: '[name].css',
			chunkFilename: '[id].css'
		})
	]
};

module.exports = config;
