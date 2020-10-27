const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_env, argv) => {
	const { mode } = argv;

	let config = {
		entry: './src/index.js',
		output: {
			filename: 'main.js',
			path: path.resolve(__dirname, 'dist'),
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
							plugins: ['@babel/transform-runtime'],
						},
					},
				},
				{
					test: /\.(png|jpg|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
							},
						},
					],
				},
				{
					test: /\.css$/,
					use: [MiniCssExtractPlugin.loader, 'css-loader'],
				},
			],
		},
	};

	switch (mode) {
		case 'development':
			config = {
				...config,
				mode: 'development',
				watch: true,
				devServer: {
					contentBase: './dist',
					open: true,
				},
				devtool: 'inline-source-map',
				plugins: [
					new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
					new HtmlWebpackPlugin({
						template: path.resolve(__dirname, 'index.html'),
					}),
				],
			};
			break;

		case 'production':
			config = {
				...config,
				mode: 'production',
			};
			break;
	}

	return config;
};
