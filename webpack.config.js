const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	
	mode: 'development',

	// указываем входящие данные для сборки
	entry: {
		main: './src/index.js'
	},
	devtool: 'inline-source-map',
	// указываем куда будет происходить сборка проекта
	output: {
		// filename: 'bundle.js',
		filename: '[name].[contenthash].js', //pattern webpack-a по происваиванию наименования файла
		path: path.resolve(__dirname, 'dist')
	},

	devServer: {
		port: 9000
	},

	plugins: [
		// плагин очистки dist от старых откомпилированных файлов
		new CleanWebpackPlugin(),
		// плагин обработки html файлов
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html')
		}),
	],

	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader"
			},
			// обркаботка css
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			// обработка less
			{
				test: /\.less$/i,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
			// обработка saas, scss
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
		],
	},
};