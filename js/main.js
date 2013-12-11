$(document).on("ready", function() {
	$("#conectar").click(function() {
        alert("hola mundo");
	});

	utils.loadTemplate(['HomeView', 'PersonaListItemView', 'PersonaView'], function() {
        app = new AppRouter();
        Backbone.history.start();
	});
});