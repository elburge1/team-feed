// compile templates
var tmplRoster = Template7.compile(Dom7('#template-roster').html());


// load data
Dom7.get('../data/players.json', '', function (data) {
    console.log(data);
    window.players = JSON.parse(data);
    console.log(players);

    // render tenmplates
    Dom7("#roster-content").html(tmplRoster(window.players));


    // init
    var app = new Framework7({pushState: true});
    var mainView = app.addView('.view-main', {domCache: true});

    Dom7(".back-link").on("click", function(evt) {
        evt.preventDefault();
        mainView.router.back({pushState: true});
    });

    // team view
    Dom7(".player-card").on("click", function(evt) {
        var player = Dom7(evt.currentTarget).data("player");
        // load player data
        mainView.router.load({pageName: "player", pushState: true});
    });

    // player view
    //var playerSwiper = app.swiper(".swiper-container", {speed: 400, pagination: ".swiper-container .swiper-pagination"});


});

