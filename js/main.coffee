###by default, coffeescript should wrap this definition in a function wrapper on compilation,
making the class anonymous. Double check on launch!###

class App

	"use strict"

	init: ->
		console.log 'page custom JS running'

app = new App
app.init()