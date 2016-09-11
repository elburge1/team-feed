// Iniitalize Packages used by blog App
   var mongoose         = require("mongoose");
       
// Define location and or methods used by packges
   mongoose.connect("mongodb://localhost/playerdb");

// PlayerSocialMedia
var playerSMSchema = new mongoose.Schema({
    socialMedia: String,
    handle: String,
    image:  String,
    posts:  []
});
var PlayerSM = mongoose.model("PlayerSM", playerSMSchema);

// PlayerProfile
var playerProfileSchema = new mongoose.Schema({
    name:  String,
    jersynumber: String,
    postion: String,
    height: String,
    weight: Number,
    dob: Date,
    age: Number,
    born: String,
    Image: String,
    playerDesc: String,
    mlbdebut: Date,
    education: String,
    batting: String,
    throwing: String,
    socialMedia: [playerSMSchema],
});
var Player = mongoose.model("Player", playerProfileSchema);

var teamSMSchema = new mongoose.Schema({
    socialMedia: String,
    handle: String,
    image:  String
});
var TeamSM = mongoose.model("TeamSM", teamSMSchema);

// Team Schema
var teamSchema = new mongoose.Schema({
    name:  String,
    sports: String,
    location: String,
    logo: String,
    website: String,
    socialMedia: [teamSMSchema],
    player: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }]
});
var Team = mongoose.model("Team", teamSchema);
   
// Create Player Profile
// var newPlayer1 = new Player({
//     name:  "Robinson Cano",
//     jersynumber: "22",
//     postion: "Left Field",
//     height: "6'0",
//     weight: 210,
//     dob: "10/22/1982",
//     age: 33,
//     born: "San Pedro de Macoris, Dominican Republic",
//     Image: "http://mlb.mlb.com/mlb/images/players/head_shot/429664.jpg",
//     playerDesc: "Robinson Jose Cano…resides in San Pedro de Macoris, Dominican Republic…played basketball and baseball at San Pedro Apostol High School…father, Jose, was a pitcher in the Yankees, Braves and Astros organizations; appeared in 6 games with the Astros (3 starts) in 1989… along with his mother, Claribel, and father, established the RC24 Foundation in 2011 to provide hope to sick and underprivileged children in New York City and the Dominican Republic…visited the residence of the U.S. Ambassador to the Dominican Republic on 1/27/11 as part of MLB's 'Dominican Baseball Families' initiative to support projects undertaken by the MLB Dominican Development Alliance…among 30 finalists for the 2006 Roberto Clemente Award, given annually to the Major League Baseball player who combines outstanding skills on the baseball field with devoted work in the community… received the 2010 'Joe DiMaggio Toast of the Town' Award from the New York Chapter of the BBWAA…was also given the 2010 'Player Citizen of the Year' Award from latinobaseball.com.",
//     mlbdebut: "05/03/2005",
//     education: "San Pedro Apostol, San Pedro de Macoris, DR",
//     batting: "Left",
//     throwing:"Right"
// });

// newPlayer1.socialMedia.push({
//     socialMedia: "Twitter",
//     handle: "@RobinsonCano",
//     image: "https://pbs.twimg.com/profile_images/656217493359321088/nrixGawG_200x200.jpg",
//     posts: [{
//             posts: "Friday's as good a day as any to vote @RobinsonCano for the Roberto Clemente award. Just use #VoteCano.",
//             image: "https://pbs.twimg.com/media/Cr7xvmNUAAA6SUT.jpg"
//             },
//             {
//             posts: "Help our guy @RobinsonCano win a well-deserved 2016 Roberto Clemente Award by tweeting '#VoteCano'",
//             image: "https://pbs.twimg.com/media/Cr7jjT8WAAAzeg5.jpg"
//             },
//             {
//             posts: "Join me and my partner @SparklingIce to help spread kindness and support the @RC22Foundation http://bit.ly/2bHQ3pj  #FlavorItForward",
//             image: ""
//             },
//             {
//             posts: "Just about the greatest night ever 😍❤️ @RobinsonCan ",
//             image: "https://pbs.twimg.com/media/Cr5FEgqVYAA_69q.jpg"
//             }
//     ]
// });


// newPlayer1.socialMedia.push({
//     socialMedia: "Instgram",
//     handle: "robinsoncano",
//     image: "https://scontent.cdninstagram.com/t51.2885-19/924749_1588613631424944_214899350_a.jpg",
//     posts: [{posts: "",
//              image: "https://www.instagram.com/p/BKJNv2XDeFN/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BKBaDG3DX4Z/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BJgDMRkD7Ux/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BJHpkEVDLW1/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BJBmG67DH2i/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIyVUyFjnTT/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIiTcVVjnNi/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIVDAtMDFbd/?taken-by=robinsoncano"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BHtdBFPDxUq/?taken-by=robinsoncano"
//             }
//     ]
// });


// newPlayer1.save(function(err, player1) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(player1);
//   }
// });

// // Create Player Profile
// var newPlayer2= new Player({
//     name:  "Nelson Cruz",
//     jersynumber: "23",
//     postion: "DH",
//     height: "6'2",
//     weight: 230,
//     dob: "7/1/1980",
//     age: 36,
//     born: "Las Matas de Santa Cruz, Dominican Republic",
//     Image: "http://mlb.mlb.com/mlb/images/players/head_shot/443558.jpg",
//     playerDesc: "Nelson Ramon Martinez Cruz, Jr...originally signed by the New York Mets organization as a non-drafted free agent on Feb. 23, 1998...played basketball for the Dominican Republic Junior National Team...father, Nelson Cruz, Sr., played professional baseball in the Dominican Republic...was the recipient of the 2010 Harold McKinney Good Guy Award by the Dallas-Fort Worth BBWAA chapter...Nelson and his wife, the former Solani Genao, were married on Dec. 25, 2009 and have a daughter, Giada (10/11/12)....also has a son, Nelson, Jr. (11/1/08).",
//     mlbdebut: "09/17/2005",
//     education: "",
//     batting: "Right",
//     throwing:"Right"
// });

// newPlayer2.socialMedia.push({
//     socialMedia: "Twitter",
//     handle: "@ncboomstick23",
//     image: "https://pbs.twimg.com/profile_images/589994512283402240/RVky664b_200x200.jpg",
//     posts: [{
//             posts: "What an AB for @ncboomstick23. He falls behind 0-2, then hits the 13th pitch of the battle for an RBI double.",
//             image: ""
//             },
//             {
//             posts: "Nikki Jones @fuzzybunny_feet  23m23 minutes ago THANKS @ncboomstick23 😍😍😍😍 ",
//             image: "https://pbs.twimg.com/media/CsF_fa9UkAEurHR.jpg"
//             },
//             {
//             posts: "#TheSwelmet looks pretty good on @ncboomstick23, doesn't it?",
//             image: ""
//             },
//             {
//             posts: "nice season you got going @ncboomstick23 ",
//             image: ""
//             }
//     ]
// });

// newPlayer2.socialMedia.push({
//     socialMedia: "Instgram",
//     handle: "ncboomstick23",
//     image: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12935075_210917395964201_1079732517_a.jpg",
//     posts: [{posts: "",
//              image: "https://www.instagram.com/p/BJoApmPj3CG/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BJgDb_KDV5e/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BI9QOfFjr4o/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BI9QOfFjr4o/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIyFVqiDs2b/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIvx6QmjWC5/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIiX8XpDNGw/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIeNyKDDcEb/?taken-by=ncboomstick23"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BId6KgIDUBa/?taken-by=ncboomstick23"
//             }
//     ]
// });


// newPlayer2.save(function(err, player2 ) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(player2);
//   }
// });

// // Create Player Profile
// var newPlayer3 = new Player({
//     name:  "Felix Hernandez",
//     jersynumber: "34",
//     postion: "P",
//     height: "6'3",
//     weight: 225,
//     dob: "04/08/1986",
//     age: 30,
//     born: "Valencia, Venezuela",
//     Image: "http://mlb.mlb.com/mlb/images/players/head_shot/433587.jpg",
//     playerDesc: "Felix Abraham Hernandez… resides during the off-season in Valencia, VZ and Bellevue, WA with wife Sandra… has a daughter, Mia, and son, Jeremy… older brother, Moises, is a pitcher in the Mariners organization…graduated from Unidad Educativa Jose Austre in July 2002…named to the provisional roster for Venezuela for the World Baseball Classic in 2006, 2009 and 2013.",
//     mlbdebut: "08/04/2005",
//     education: "Unidad Educativa Jose Austre, VEN",
//     batting: "Right",
//     throwing:"Right"
// });

// newPlayer3.socialMedia.push({
//     socialMedia: "Twitter",
//     handle: "@RealKingFelix",
//     image: "https://pbs.twimg.com/profile_images/703089448242716676/Rko-yc_t_200x200.jpg",
//     posts: [{
//             posts: "The vote is in, and the King wears the crown today. @RealKingFelix is your #MarinersPOG.",
//             image: "https://pbs.twimg.com/media/CsB9FR7UMAA75dY.jpg"
//             },
//             {
//             posts: "The King. #GoMariners @RealKingFelix @Mariners",
//             image: "https://pbs.twimg.com/media/CsB6rxHUkAAW-n4.jpg"
//             },
//             {
//             posts: "Nice win #Mariners! Way to get @RealKingFelix some run support!",
//             image: ""
//             },
//             {
//             posts: " @RealKingFelix throws 6 shutout innings, Mariners beat the A's, 14-3 Thearon W. Henderson/Getty Images",
//             image: "https://pbs.twimg.com/media/CsB0q7kXgAACu27.jpg"
//             }
//     ]
// });

// newPlayer3.socialMedia.push({
//     socialMedia: "Instgram",
//     handle: "therealkingfelix34",
//     image: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/12784127_1677547805846305_1754625105_a.jpg",
//     posts: [{posts: "",
//              image: "https://www.instagram.com/p/BJ5tcaTA6kG/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIyW6irjZlv/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BII0n2ODrAG/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIGmXzIjldC/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BH5cqDtjmzV/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BH02hGmDKfT/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BHt2nnjjgp1/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BHqtoxeDTa9/?taken-by=therealkingfelix34"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BFucLnnoxYJ/?taken-by=therealkingfelix34"
//             }
//     ]
// });


// newPlayer3.save(function(err, player3 ) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(player3);
//   }
// });

// // Create Player Profile
// var newPlayer4 = new Player({
//     name:  "Dan Altavilla",
//     jersynumber: "53",
//     postion: "P",
//     height: "5' 11",
//     weight: 200,
//     dob: "09/08/1992",
//     age: 23,
//     born: "McKeesport, PA",
//     Image: "http://mlb.mlb.com/mlb/images/players/head_shot/656186.jpg",
//     playerDesc: "Striking out MLB Players",
//     mlbdebut: "08/27/2016",
//     education: "Mercyhurst Collage",
//     batting: "Right",
//     throwing:"Right"
// });

// newPlayer4.socialMedia.push({
//     socialMedia: "Twitter",
//     handle: "@DanAlt3225",
//     image: "https://pbs.twimg.com/profile_images/774492965402062849/t5ir5LpT_400x400.jpg",
//     posts: [{
//             posts: "@PSACsports @HurstAthletics @DanAlt3225 faced @WCUAthletics @WCU_Baseball @JoeyWendle last night in @MLB although not happy with the result",
//             image: ""
//             },
//             {
//             posts: "Shout out to @danalt3225 for having arguably the best smile in the majors..Oh and thanks for some good seats #alums",
//             image: "https://pbs.twimg.com/media/Cr7sf1sVUAA3DKr.jpg"
//             },
//             {
//             posts: "Happy birthday Dan! @DanAlt3225",
//             image: ""
//             },
//             {
//             posts: "Thank you to everyone for all of the kind birthday wishes! It made today even more special and never goes unnoticed. #24",
//             image: ""
//             }
//     ]
// })

// newPlayer4.socialMedia.push({
//     socialMedia: "Instgram",
//     handle: "dan.altavilla3225",
//     image: "https://scontent.cdninstagram.com/t51.2885-19/s150x150/11881626_997329716973612_395408399_a.jpg",
//     posts: [{posts: "",
//              image: "https://www.instagram.com/p/BJ1LVPTAPHJ/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BIThNuVBAYu/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BG5tE68BA1_/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BGj6fBJBAy2/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BFJ36-hBA2B/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BDCerWqhAzF/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/BCBY28DBA3p/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/_vsiTeBA6G/?taken-by=dan.altavilla3225"
//             },
//             {posts: "",
//              image: "https://www.instagram.com/p/_kxPXjBA6o/?taken-by=dan.altavilla3225"
//             }
//     ]
// });

// newPlayer4.save(function(err, player4 ) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(player4);
//   }
// });


// // Create Team
// var newTeam = new Team({
//     name:  "Mariners",
//     sports: "Baseball",
//     location: "Seattle,Wa",
//     logo: "http://content.sportslogos.net/logos/53/75/full/1305.png",
//     website: "http://seattle.mariners.mlb.com/index.jsp?c_id=sea"
// });

// newTeam.socialMedia.push({
//     socialMedia: "Twitter",
//     handle: "@Mariners"
// });

// newTeam.save(function(err, team ) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(team);
//   }
// });

// Association 
Team.findOne({name: "Mariners"}, function(err, team){
    if (err) {
        console.log(err);
    } else {
        console.log(team);
        Player.find({}, function(err, players){
            if (err) {
                console.log(err);
            } else {
                team.player.push(players);
                team.save(function(err, user){
                  if (err) {
                        console.log(err);               
                  } else {
                        console.log(user);
                  }
                });
                console.log(team);
            }
        });
    }
});

