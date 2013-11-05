module.exports = function (app) {

	var mongo = require('./mongoose');

	app.get('/', function (req, res) {
		res.render('index', {
			titulo : 'Bienvenido'
		});
	});

	app.get('/personas', mongo.findAll);
	app.post('/personas', mongo.insertRecord);
	app.get('/personas/:cedula', mongo.findByCedula);
	app.delete('/personas/:id', mongo.deleteRecord);
	app.put('/personas/:id', mongo.updateRecord);
};