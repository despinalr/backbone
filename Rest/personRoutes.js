var mongo = require('./mongoose');

exports.findAll = function(req, res) {
    res.set('Content-Type', 'application/json');
    mongo.findAllRecords(function(personas) {
        res.send(JSON.stringify(personas));
    });
};

exports.findByCedula = function(req, res) {
    res.set('Content-Type', 'application/json');
    mongo.getRecord("Cedula", req.params.cedula, function(persona) {
        res.send(JSON.stringify(persona));
    });
};

exports.insertPerson = function(req, res) {
    res.set('Content-Type', 'application/json');
    mongo.insertRecord(req.body, function(response) {
        res.send(response);
    });
};

exports.updatePerson = function(req, res) {
    res.set('Content-Type', 'application/json');
    mongo.updateRecord("_id", req.params.id, req.body, function(response) {
        res.send(response);
    });
};

exports.deletePerson = function(req, res) {
    res.set('Content-Type', 'application/json');
    mongo.deleteRecord("_id", req.params.id, function(response) {
        res.send(response);
    });
};
