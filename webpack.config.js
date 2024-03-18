import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const __dirname = dirname(fileURLToPath(
	import.meta.url
))

export default {
	context: __dirname,
	entry: {
		main: {
			import: './src/main.ts'
		}
	},
	output: {
		filename: '[name].js',
		path: resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: [
			'...',
			'.ts',
			'.tsx',
		],
		alias: {
			'@router': resolve(__dirname, 'src/router'),
			'@domain': resolve(__dirname, 'src/domain'),
		}
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.s(c|a)ss$/,
				use: 'sass-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'public/index.html')
		}),
		new MiniCssExtractPlugin(),
	],
};