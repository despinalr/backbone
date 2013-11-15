window.AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "products": "list",
        "addproduct": "add"
    },

    initialize: function() {
    },

    home: function(id) {
        this.home_view = new HomeView();
        $("#content").html(this.home_view.el);
    },

    list: function(page) {
        var personList = new PersonaCollection();

        personList.fetch({
            success: function () {
                $("#personaslst").html(new PersonaListView({ model: personList }).el);
            },
            error: function (collection, response) {
                console.log(response);
            }
        }).complete(function () {
            console.log("done");
        });
    },

    add: function(page) {
        console.log("add");
        this.persona_view = new PersonaView();
        $("#content").html(this.persona_view.el);
    }
});