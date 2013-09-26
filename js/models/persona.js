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
