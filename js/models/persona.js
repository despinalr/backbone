window.Persona = Backbone.Model.extend({
    urlRoot: "personas",
    idAttribute: "_id",

    initialize: function() {
        this.validators = {};
    },

    validateItem: function(key) {
        return { isValid: true };
    },

    validateAll: function() {
        return { isValid: true };
    },

    save: function(attrs, options) {
        options || (options = {});
        // Filter the data to send to the server
        delete this.attributes._id;
        // Proxy the call to the original save function
        Backbone.Model.prototype.save.call(this, attrs, options);
    },

    defaults: {
        _id : null,
        Cedula: 0,
        Nombre: "",
        Apellido: ""
    }
});

window.PersonaCollection = Backbone.Collection.extend({
    model: Persona,
    url: "personas"
});
