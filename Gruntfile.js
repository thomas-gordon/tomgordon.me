module.exports = function (grunt) {

	require('jit-grunt')(grunt, {
		bower: 'grunt-bower-install-simple',
        sftp: 'grunt-ssh'
	});

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass: {
			develop: {
				options: {
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
					'./css/style.css': './scss/style.scss'
				}
			}
		},

        secret: grunt.file.readJSON('secret.json'),

        sftp: {
            test: {
                files: {
                    "./": "_site/**"
                },
                options: {
                    path:'<%= secret.path %>',
                    host: '<%= secret.host %>',
                    username: '<%= secret.username %>',
                    password: '<%= secret.password %>',
                    port: '<%= secret.port %>',
                    srcBasePath: '_site/',
                    showProgress: true
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

		connect: {
			options: {
				livereload:4000,
				base: '_site/'
			},
			uses_defaults: {}
		},

		jekyll: {
			server: {
				options: {
					serve:true,
		            port : 8000,
		            watch:false
				},
			},
			dev: {
				options: {
					drafts: './_drafts',
					dest: './_site'
				}
			}
		},

		ender: {
			options: {
				output: "js/ender/ender",
				dependencies: ["domReady", "bean", "bonzo", "qwery"]
			}
		},

		//* =============================================
		//Section: WATCH
		//================================================ */
		watch: {
			options: {
				livereload: true
			},
			jekyll: {
				files: [
					'./*.html',
					'./_drafts/*',
					'./_layouts/*',
					'404.html',
					'_config.yml',
					'index.html'
				],
				tasks: ['jekyll:dev']
			},
			sass: {
				options: {
					livereload: false
				},
				files: [
					'./scss/**/*.scss'
				],
				tasks: ['sass:develop']
			},
			css: {
				files: ['./_site/css/style.css'],
				tasks: []
			},
			coffee: {
				files: ['./coffee/*.coffee'],
				tasks: ['coffee']
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
			options: {
				bare: true
			},
			compile: {
				files: {
					'./_site/js/frontend-scripts.js': 'coffee/frontend-scripts.coffee' // 1:1 compile
				}
			}
		},
		concurrent: {
	        target: ['jekyll:server', 'watch'],
	        options: {
                logConcurrentOutput: true
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
		grunt.task.run(
			'bower-install-simple',
			'ender',
			'coffee',
			'message:welcome',
			'sass:develop',
			'concurrent'
		);
	});

	/*
	 * `grunt build`: this task creates a production ready version of theme with 1 js file and minified css.
	 * */
	grunt.registerTask('build', [], function () {
		grunt.loadNpmTasks('grunt-usemin');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-uglify');
		grunt.task.run(
			'bower-install-simple',
			'ender:build',
			'sass:production',
			'coffee',
			'jekyll:dev',
			'message:build_done',
			'sftp-deploy'
		);
	});
};