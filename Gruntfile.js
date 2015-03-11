module.exports = function(grunt) {
	grunt.initConfig({

		jasmine: {
			src: ['src/app.js', 'src/MyCtrl.js'],
			options: {
				specs: 'spec/MyCtrlSpec.js',
				vendor: [
					'bower_components/angular/angular.js',
					'bower_components/angular-mocks/angular-mocks.js'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.registerTask('default', 'jasmine');

};