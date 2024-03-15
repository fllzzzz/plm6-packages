import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
			'@components': resolve(__dirname, 'src/components'),
		}
	},
	module: {
		rules: [
			{
				test: /\.ts(x)?$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve(__dirname, 'public/index.html')
		})
	],
};