var chalk = require('chalk');
var semver = require('semver');
var packageConfig = require('../package.json');

function exec(cmd) {
	return require('child_process').execSync(cmd).toString().trim();
}

var versionRequirements = [
	{
		name: 'node',
		currentVersion: semver.clean(process.version),
		versionRequirements: packageConfig.engines.node
	},
	{
		name: 'npm',
		currentVersion: exec('npm --version'),
		versionRequirements: packageConfig.engines.npm
	}
]

module.exports = function() {
	var warnings = [];
	for (var i = 0; i < versionRequirements.length; i++) {
		var mod = versionRequirements[i];
		if(!semver.satisfies(mod.currentVersion, mod.versionRequirements)) {
			varnings.push(mod.name + ': ' + chalk.red(mod.currentVersion) + ' should be ' + chalk.green(mod.versionRequirements));
		}
	};

	if(warnings.length) {
		console.log('');
		console.log(chalk.yellow('To use this template, you must update following to modules:'));
		console.log('');
		for (var i = 0; i < warnings.length; i++) {
			console.log('  ' + warnings[i]);
		};
		console.log('');
		process.exit(1);
	}
}