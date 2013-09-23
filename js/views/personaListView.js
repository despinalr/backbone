window.PersonaListView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    render: function () {
        var personList = this.model.models;
        var self = $(this.el);

        $.each(personList, function(index, person) {
            self.append(new PersonaListItemView( { model: person } ).render().el);
        });

        return this;
    }
});

window.PersonaListItemView = Backbone.View.extend({

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});