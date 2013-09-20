$(document).on("ready", function() {
	$("#conectar").click(function() {
		alert("hola mundo");
	});

	utils.loadTemplate(['HomeView'], function() {
		this.home_view = new HomeView();
		$("#content").html(this.home_view.el);
		//app = new AppRouter();
    	//Backbone.history.start();
	});
});