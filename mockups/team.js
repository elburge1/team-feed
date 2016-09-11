Dom7(".player-card").on("click", function(evt) {
    var player = Dom7(evt.currentTarget).data("player");
    mainView.router.loadPage(player);
});
