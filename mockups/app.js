// compile templates
var tmplRoster = Template7.compile(Dom7('#template-roster').html());
var tmplTeamFeed = Template7.compile(Dom7('#template-team-feed').html());


// load data
Dom7.get('../data/player1-4.json', '', function (data) {
    var data = JSON.parse(data);
    window.players = {players: _.values(data)};

    // team feed
    window.teamFeed = [];
    window.playerFeeds = {};
    _.forEach(window.players.players, function(player) {
        window.playerFeeds[player._id] = [];
        var twitter = player.socialMedia[0];
        _.forEach(twitter.posts, function(post) {
            post.handle = twitter.handle;
            post.playerId = player._id;
            window.playerFeeds[player._id].push(post);
            window.teamFeed.push(post);
        });
    });



    // render tenmplates
    Dom7("#roster-container").html(tmplRoster(window.players));
    Dom7("#team-feed-container").html(tmplTeamFeed({posts: window.teamFeed}));


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

