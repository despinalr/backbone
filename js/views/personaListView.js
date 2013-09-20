window.PersonaListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        var personList = this.model.models;

        $.each(personList, function(index, person) {
        	$(this.el).append(new PersonaListItemView( { model: person } ).render().el);
        });

        return this;
    }
});

window.PersonaListItemView = Backbone.View.extend({

    tagName: "li",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        console.log('toJSON: ', this.model.toJSON().Nombre);
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});