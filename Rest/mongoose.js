var mongoose = require('mongoose').connect('localhost', 'test');

var personaSchema = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Cedula: Number
});

var persona = mongoose.model('Personas', personaSchema);

 mongoose.connection.once('open', function callback () {
	console.log('Conectado!!!');
});

exports.findAll = function(req, res) {
	res.set('Content-Type', 'application/json');
	persona.find( {} , function (err, personas) {
		res.send(JSON.stringify(personas));
	});
};

exports.insertRecord = function(req, res) {
	res.set('Content-Type', 'application/json');
	var instance = new persona({
		Nombre: req.body.nombre,
		Apellido: req.body.apellido,
    	Cedula: req.body.cedula
	});
	
	instance.save(function (err) {
		if(!err) {
			res.send(JSON.stringify({"status":"ok"}));
		}
	});
};

exports.findByCedula = function(req, res) {
	res.set('Content-Type', 'application/json');
	persona.findOne( { "Cedula": req.params.cedula } , function (err, personas) {
		res.send(JSON.stringify(personas));
	});
};

exports.deleteRecord = function(req, res) {
	res.set('Content-Type', 'application/json');
	persona.remove( { "_id": req.params.id } , function (err) {
		res.send(JSON.stringify({"status":"ok"}));
	});
};

exports.updateRecord = function(req, res) {
	res.set('Content-Type', 'application/json');
	persona.findOne( { "_id": req.body.id } , function (err, personas) {
		personas.Nombre = req.body.nombre || personas.Nombre;
		personas.Apellido = req.body.apellido || personas.Apellido;
		personas.Cedula = req.body.cedula || personas.Cedula;

		personas.save(function (err) {
			if(!err) {
				res.send(JSON.stringify({"status":"ok"}));
			}
		});
	});
};