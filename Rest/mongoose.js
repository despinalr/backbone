var util = require('./util');
var mongoose = require('mongoose').connect('localhost', 'test');
var personaSchema = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Cedula: Number
});

var persona = mongoose.model('Personas', personaSchema);

mongoose.connection.once('open', function callback() {
    console.log('Conectado!!!');
});

exports.findAllRecords = function(callback) {
    persona.find({}, function(err, personas) {
        callback(personas);
    });
};

exports.getRecord = function(field, value, callback) {
    var filter = util.buildFilter(field, value);
    persona.findOne(JSON.parse(filter), function(err, person) {
        callback(person);
    });
}

exports.insertRecord = function(model, callback) {
    var instance = new persona(model);
    instance.save(function(err) {
        callback(util.buildResponse(err));
    });
};

exports.updateRecord = function(field, value, body, callback) {
    var filter = util.buildFilter(field, value);
    persona.update(JSON.parse(filter), body, { multi: true }, function (err, numberAffected, raw) {
        callback(util.buildResponse(err));
    });
};

exports.deleteRecord = function(field, value, callback) {
    var filter = util.buildFilter(field, value);
    persona.remove(JSON.parse(filter), function(err) {
        callback(util.buildResponse(err));
    });
}
