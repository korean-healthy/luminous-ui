const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssLoaders = [
	{
		loader: 'css-loader',
		options: {
			importLoaders: 1
		}
	},
	'postcss-loader'
];

const cssExtract = ExtractTextPlugin.extract({
	use: cssLoaders,
	fallback: 'vue-style-loader'
});

const lessExtract = ExtractTextPlugin.extract({
	use: cssLoaders.concat('less-loader'),
	fallback: 'vue-style-loader'
});

module.exports = {
	entry: {
		luminous: path.resolve(__dirname, 'index.js')
	},

	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
		filename: '[name].bundle.js',
		library: 'LuminousUI',
		libraryTarget: 'umd'
	},

	module: {
		rules: [
			{
				test:/\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'less': lessExtract,
						'css': cssExtract,
						'js': {
							loader: 'babel-loader',
							options: {
								presets: ['latest']
							}
						}
					}
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['latest']
				},
				exclude: /node_modules/
			},
			{
				test: /\.less$/,
				loader: lessExtract
			},
			{
				test: /\.css$/,
				loader: cssExtract
			},
			{
				test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
				loader: 'file-loader',
				options: {
					name: 'files/[name].[ext]?[hash]'
				}
			}
		]
	},

	plugins: [
		new ExtractTextPlugin('[name].bundle.css')
	],

	resolve: {
		alias: {
			'theme.less': path.resolve(__dirname, 'less', 'theme.less'),
			'utilities.less': path.resolve(__dirname, 'less', 'utilities.less')
		}
	},

	devtool: '#eval-source-map'
};

if(process.env.NODE_ENV === 'production'){
	module.exports.devtool = '#source-map';
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		})
	]);
}else{
	module.exports.entry.test = path.resolve(__dirname, 'test', 'index.js');
}
