window.PersonaView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    render: function() {
        var person = this.model;
        var self = $(this.el);

        $(this.el).html(this.template(person.toJSON()));
        return this;
    }

});