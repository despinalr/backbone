var mongo = require('./../Rest/mongoose');
var assert = require("assert");
var should = require('should');

'use strict';

describe('addition', function () {
    it('should add 1+1 correctly', function (done) {
        var onePlusOne = 1 + 1;
        onePlusOne.should.equal(2);
        // must call done() so that mocha know that we are... done.
        // Useful for async tests.
        done();
    });
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    })
});

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function(){
            [1,2,3].indexOf(5).should.equal(-1);
            [1,2,3].indexOf(0).should.equal(-1);
        })
    })
});

describe('mongoose getRecord', function() {

    before(function(done) {
        var record = "{ \"Nombre\": \"Michael\", \"Apellido\": \"Myers\", \"Cedula\": 123 }";
        mongo.insertRecord(JSON.parse(record), function(response) {
            done();
        });
    });

    describe('getRecord', function() {
        it('should return Cedula 123', function(done) {
            mongo.getRecord("Cedula", 123, function(persona) {
                persona.should.include({ Cedula: 123 });
                done();
            });
        })
    });

    after(function(done) {
        mongo.deleteRecord("Cedula", 123, function(response) {
            done();
        });
    });
});