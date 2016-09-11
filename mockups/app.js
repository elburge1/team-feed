// compile templates
var tmplRoster = Template7.compile(Dom7('#template-roster').html());
var tmplTeamFeed = Template7.compile(Dom7('#template-team-feed').html());
var tmplPlayerFeed = Template7.compile(Dom7('#template-player-feed').html());
var tmplPlayerInstagram = Template7.compile(Dom7('#template-player-instagram').html());
var tmplPlayer = Template7.compile(Dom7('#template-player').html());
var tmplPlayerBio = Template7.compile(Dom7('#template-player-bio').html());

function renderPlayer(player_id) {
    console.log("rerender " + player_id);
    var player = window.players[player_id];

    Dom7("#player-container").html(tmplPlayer(player));
    Dom7("#player-bio-container").html(tmplPlayerBio(player));
    Dom7("#player-twitter-container").html(tmplPlayerFeed({posts: window.playerFeeds[player._id]}));
    Dom7("#player-instagram-container").html(tmplPlayerInstagram({posts: window.playerInstagram[player._id]}));

}

// load data
Dom7.get('../data/player1-4.json', '', function (data) {
    var data = JSON.parse(data);
    window.playerData = {players: _.values(data)};

    // team feed
    window.teamFeed = [];
    window.playerFeeds = {};
    window.playerInstagram = {};
    window.players = {};
    _.forEach(window.playerData.players, function(player) {
        window.playerFeeds[player._id] = [];
        window.playerInstagram[player._id] = [];
        window.players[player._id] = player;
        var twitter = player.socialMedia[0];
        var instagram = player.socialMedia[1];
        _.forEach(twitter.posts, function(post) {
            post.handle = twitter.handle;
            post.playerId = player._id;
            window.playerFeeds[player._id].push(post);
            window.teamFeed.push(post);
        });
        _.forEach(instagram.posts, function(post) {
            window.playerInstagram[player._id].push(post);
        });
    });



    // render tenmplates
    Dom7("#roster-container").html(tmplRoster(window.playerData));
    Dom7("#team-feed-container").html(tmplTeamFeed({posts: window.teamFeed}));


    // init
    window.app = new Framework7({pushState: true});
    window.mainView = window.app.addView('.view-main', {domCache: true});
    

    Dom7(".back-link").on("click", function(evt) {
        evt.preventDefault();
        window.mainView.router.back({pushState: true});
    });

    // team view
    Dom7(".player-card").on("click", function(evt) {
        var player_id = Dom7(evt.currentTarget).data("player");
        renderPlayer(player_id);
        // load player data
        window.mainView.router.load({pageName: "player", pushState: true});
    });

    //roster view
    Dom7(".roster-link").on("click", function(evt) {
        console.log("roster link");
        evt.preventDefault();
        var player_id = Dom7(evt.currentTarget).data("player");
        renderPlayer(player_id);
        window.mainView.router.load({pageName: "player", pushState: true});
    });


    // player view
    //var playerSwiper = window.app.swiper(".swiper-container", {speed: 400, pagination: ".swiper-container .swiper-pagination"});

    Dom7(".feed-button").on("click", function(evt) {
        console.log("feed button");
        evt.preventDefault();

        Dom7(".feed-button").removeClass("active");
        Dom7(evt.target).addClass("active");

        Dom7("#player-bio-container").hide();
        Dom7("#player-twitter-container").hide();
        Dom7("#player-instagram-container").hide();
        var targetId = "#player-" + evt.target.id + "-container";
        console.log(targetId);
        Dom7(targetId).show();
    });
});

