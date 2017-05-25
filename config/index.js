//http://vuejs-templates.github.io/webpack/
var path = require('path');

module.exports = {
	build: {
		env: require('./prod.env.js'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		productionSourceMap: true,
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		bundleAnalyzerReport: process.env.npm_config_report
	},
	dev: {
		env: require('./dev.env.js'),
		port: 8080,
		autoOpenBrower: true,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {},
		cssSourceMap: false
	}
};