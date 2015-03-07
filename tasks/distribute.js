module.exports = function(grunt) {
	var endPath = '/Applications/AMPPS/www/new/';
	var config = grunt.file.readJSON('config.json');
	var path  = require('path');

	grunt.registerTask('distribute', 'Copy the production files to the proper location for further testing', function() {

		console.log(grunt.file.isDir(config.distribute.local));

		if(grunt.file.isDir(config.distribute.local)){
			grunt.config('copy.distribute.files', [
				{src: 'build/scripts/require.js', dest: endPath + '/scripts/require.js'},
				{src: 'build/scripts/main.min.js', dest: endPath + '/scripts/main.min.js'},
				{src: 'build/scripts/director.min.js', dest: endPath + '/scripts/director.min.js'},
				{src: 'build/scripts/lib/jquery/jquery.min.map', dest: endPath + '/scripts/jquery.min.map'},
				{expand: true, cwd: 'dist/css/', src: ['**/*.*'], dest: endPath + '/css', filter: 'isFile'},
			]);
			grunt.task.run(['requirejs', 'copy:distribute']);
		}

	});

}