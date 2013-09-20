var express = require('express');
var app     = express();
var server  = require('http').createServer(app);
var swig    = require('swig');
var cons    = require('consolidate');
var path	= require('path');

app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(app.router);

	//Registra Contenido Estático y Vistas
	app.engine('.html', cons.swig);
	app.set('view engine', 'html');
	app.use(express.static('./js'));
	app.use(express.static('./js/lib'));
	app.use(express.static('./js/models'));
	app.use(express.static('./js/views'));
	app.use(express.static('./js/tmpl'));
	app.use(express.static('./js/utils'));
	app.use(express.static('./js/routers'));
});

require('./Rest/routes.js')(app);

server.listen(3000);