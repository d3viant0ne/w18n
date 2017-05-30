'use strict';

const path = require('path');
const webpack = require('webpack');
const I18nPlugin = require('i18n-webpack-plugin');

const languages = {
	'en': null,
	'es': require('./es.json'),
}

module.exports = Object.keys(languages).map( function(language) {
	return {
		entry: './index.js',

		output: {
			path: path.join(__dirname, 'output'),

			filename: 'bundle.js',
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
			],
		},

		plugins: [
			new I18nPlugin( languages[language] ),
		]
	}
})
