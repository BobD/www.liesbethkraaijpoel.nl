module.exports = function(grunt) {
	var endPath = '/Applications/AMPPS/www/kraaijpoel/';
	var config = grunt.file.readJSON('config.json');
	var path  = require('path');

	grunt.registerTask('distribute', 'Copy the production files to the proper location for further testing', function() {

		if(grunt.file.isDir(config.distribute.local)){
			grunt.config('copy.distribute.files', [
				{src: 'build/scripts/require.js', dest: endPath + '/scripts/require.js'},
				{src: 'build/scripts/main.min.js', dest: endPath + '/scripts/main.min.js'},
				{expand: true, cwd: 'dist/css/', src: ['**/*.*'], dest: endPath + '/css', filter: 'isFile'},
				{expand: true, cwd: 'dist/images/assets', src: ['**/*.*'], dest: endPath + '/images/assets', filter: 'isFile'}
			]);
			grunt.task.run(['requirejs', 'copy:distribute']);
		}

	});

}