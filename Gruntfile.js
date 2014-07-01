module.exports = function (grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			develop: {
				options: {
					includePaths: require('node-bourbon').includePaths,
					outputStyle: 'expanded',
					sourceComments: 'map',
					sourceMap: './css/style.css.map'
				},
				files: {
					'./css/style.css': './scss/style.scss'
				}
			},
			production: {
				options: {
					includePaths: require('node-bourbon').includePaths,
					outputStyle: 'compressed'
				},
				files: {
					'./css/styles.css': './scss/styles.scss'
				}
			}
		},

		"bower-install-simple": {
			options: {
				color: true,
				production: false
			}
		},

		usemin: {
			html: 'templates/footer.php'
		},

		'useminPrepare': {
			html: 'templates/footer.php',
			options: {
				root: '../../../',
				dest: './design/scripts'
			}
		},

		uglify: {
			options: {
				sourceMap: true,
				sourceMapName: './design/scripts/site-compiled.map',
				mangle: {
					except: [
						'jQuery',
						'Backbone',
						'Spinner',
						'$',
						'enquire',
						'respond',
						'Bootstrap'
					]
				}
			}
		},

		//* =============================================
		//Section: WATCH
		//================================================ */
		watch: {
			options: {
				livereload: true
			},
			sass: {
				options: {
					livereload: false
				},
				files: [
					'./design/scss/**/*.scss'
				],
				tasks: ['sass:_develop']
			},
			grunt: {
				files: ['./css/styles.css'],
				tasks: []
			},
			coffee: {
				files: ['./coffee/*.coffee']
			}
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					FB: true,
					twttr: true,
					enquire: true
				}
			},
			defaults: ['design/scripts/**/*.js', '!design/scripts/site-compiled.js' ]
		},

		coffee: {
			compile: {
				files: {
					'js/frontend-scripts.js': 'coffee/frontend-scripts.coffee' // 1:1 compile
				}
			}
		}

	});

	grunt.registerTask('message:welcome', [], function () {
		grunt.log.writeln([
			'\n*************\n'['rainbow'].bold +
			'WELCOME TO DEFAULT FRONTEND BUILD ETERNAL WATCH TIMES.\n'['green'].bold +
			'*************'['rainbow'].bold
		]);
	});

	grunt.registerTask('message:build_done', [], function () {
		grunt.log.writeln([
			'\n*************\n'['green'].bold +
			'Your theme has now been built for production!\n'['green'].bold +
			'*************'['green'].bold
		]);
	});

	grunt.registerTask('sass:_develop', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.task.run('sass:develop');
	});

	grunt.registerTask('_coffee', [], function () {
		grunt.loadNpmTasks('grunt-contrib-coffee');
		grunt.task.run('coffee');
	});

	grunt.loadNpmTasks('grunt-contrib-coffee');

	grunt.registerTask('sass:_production', [], function () {
		grunt.loadNpmTasks('grunt-sass');
		grunt.task.run('sass:production');
	});

	grunt.registerTask('bower:_install', [], function () {
		grunt.loadNpmTasks('grunt-bower-install-simple');
		grunt.task.run('bower-install-simple');
	});

	grunt.registerTask('lint', [], function () {
		grunt.loadNpmTasks('grunt-contrib-jshint');
		grunt.task.run('jshint');
	});

	grunt.event.on('watch', function (action, filepath) {
		grunt.log.writeln([action]);
		grunt.log.writeln([filepath]);
		grunt.config(['jshint', 'defaults'], filepath);
	});

	/*
	 ==================
	 * Here are the important tasks!
	 ==================
	 * */

	/*
	 * `grunt`: this task runs the watch so your assets update live.
	 * */
	grunt.registerTask('default', [], function () {
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.task.run('bower:_install', 'sass:_develop', '_coffee','message:welcome', 'watch');
	});

	/*
	 * `grunt build`: this task creates a production ready version of theme with 1 js file and minified css.
	 * */
	grunt.registerTask('build', [], function () {
		grunt.loadNpmTasks('grunt-usemin');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.task.run('bower:_install', 'sass:_production', '_coffee', 'message:build_done');
	});


};