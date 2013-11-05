var mongoose = require('mongoose').connect('localhost', 'test');
var personaSchema = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Cedula: Number
});

var self = this;
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
    var instance = new persona(req.body);

	instance.save(function (err) {
		if(!err) {
			res.send(JSON.stringify({"status":"ok"}));
		}
        else {
            res.send(err);
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
    persona.update( { "_id": req.params.id } , req.body, { multi: true }, function (err, numberAffected, raw) {
        if (err) {
            res.send(err);
        }
        else {
            res.send(JSON.stringify({"status":"ok"}));
        }
    });
};