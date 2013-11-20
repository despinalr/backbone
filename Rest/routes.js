module.exports = function (app) {

	var personRoute = require('./personRoutes');

	app.get('/', function (req, res) {
		res.render('index', {
			titulo : 'Bienvenido'
		});
	});

	app.get('/personas', personRoute.findAll);
	app.post('/personas', personRoute.insertPerson);
	app.get('/personas/:cedula', personRoute.findByCedula);
	app.delete('/personas/:id', personRoute.deletePerson);
	app.put('/personas/:id', personRoute.updatePerson);
};