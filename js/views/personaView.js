window.PersonaView = Backbone.View.extend({

    initialize: function() {
        this.render();
    },

    render: function() {
        var person = this.model;
        var self = $(this.el);

        self.html(this.template(person.toJSON()));
        return this;
    },

    events: {
        "change"        : "change",
        "click .save"   : "save",
        "click .cancel" : "canceladd",
        "click .delete" : "delete"
    },

    change: function(event) {
        var target = event.target;
        var change = {};
        change[target.name] = target.value;
        this.model.set(change);
    },

    save: function() {
        this.model.save(null, {
            success: function(model) {
                app.navigate('products', true);
                console.log('Success! Product saved successfully');
            },
            error: function() {
                console.log('Error An error occurred while trying to save this item');
            }
        });
    },

    canceladd: function() {
        window.history.back();
    },

    delete: function() {
        this.model.destroy({
            success: function () {
                app.navigate('products', true);
                console.log('Product deleted successfully');
            }
        });

        return false;
    }

});