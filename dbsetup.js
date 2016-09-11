// Iniitalize Packages used by blog App
   var mongoose         = require("mongoose");
       
// Define location and or methods used by packges
   mongoose.connect("mongodb://localhost/playerdb");

// PlayerSocialMedia
var playerSMSchema = new mongoose.Schema({
    socialMedia: String,
    handle: String
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
    handle: String
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
var newPlayer = new Player({
    name:  "Jim Shoe",
    jersynumber: "34",
    postion: "Left Field",
    height: "6'3",
    weight: 230,
    dob: "12/31/1995",
    age: 23,
    born: "Seattle, Wa",
    Image: "http://images.wisegeek.com/baseball-player-hit-ball.jpg",
    playerDesc: "Love hitting the ball",
    mlbdebut: "05/03/2009",
    education: "Ball St.",
    batting: "Left",
    throwing:"Right"
});

newPlayer.socialMedia.push({
    socialMedia: "Twitter",
    handle: "@jimshoe"
})

newPlayer.save(function(err, player ) {
  if (err) {
      console.log(err);
  } else {
      console.log(player);
  }
});

// Create Team
var newTeam = new Team({
    name:  "Mariners",
    sports: "Baseball",
    location: "Seattle,Wa",
    logo: "http://content.sportslogos.net/logos/53/75/full/1305.png",
    website: "http://seattle.mariners.mlb.com/index.jsp?c_id=sea"
});

newTeam.socialMedia.push({
    socialMedia: "Twitter",
    handle: "@Mariners"
});

newTeam.save(function(err, team ) {
  if (err) {
      console.log(err);
  } else {
      console.log(team);
  }
});

// Association 
Team.findOne({name: "Mariners"}, function(err, team){
    if (err) {
        console.log(err);
    } else {
        console.log(team);
        Player.findOne({name: "Jim Shoe"}, function(err, player){
            if (err) {
                console.log(err);
            } else {
                team.player.push(player._id);
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

        
        
        
//         Player.findOne({name: "Jim Shoe"}, function(err, player){
//             if (err) {
//                 console.log(err);
//             } else {
//                 team.player.push({ref: player._id});
//                 team.save(function(err, user),{
//                   if (err) {
//                         console.log(err);               
//                   } else {
//                         console.log(user);
//                   }
//                 };
//             }
//         }
//     }
// });

// Player.findOne({name:  "Jim Shoe"},
//                     function (err,foundPlayer){
//                         if (err) {
//                             console.log(err)
//                         } else {
//                             foundPlayer._id;
//                         }
//                     });


// Post.create({
//     title: "Crazy Crazy",
//     content: "asdfasdglkasjs;ldfkfjalskefcl;aksc;l"
//     }, function(err, post){
//           if (err) {
//               console.log(err);
//           } else {
//               User.findOne({email: "messyboy@peanuts.com"},
//                     function (err,foundUser){
//                         if (err) {
//                             console.log(err)
//                         } else {
//                             foundUser.posts.push(post);
//                             foundUser.save(function (err, saveUserPostRef){
//                                 if (err) {
//                                     console.log(err);
//                                 } else {
//                                     console.log(saveUserPostRef);
//                                     console.log(post);
//                                 }
//                             })
//                         }
//                     })
//           }
// });

// User.findOne({email: "pigpen@peanuts.com"}).populate("posts").exec(function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });



// newUser.posts.push({
//     title: "How to be pretty",
//     content: "first be just like me. Lucy :-)."
// })

// newUser.save(function(err, user ) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(user);
//   }
// });

// Create Post
// var newPost = new Post({
//   Title: "Charlie Brown Likes",
//   content: "He enjoys talking with Linus and saying 'Good Grief'."
// });

// newPost.save(function(err, post) {
//   if (err) {
//       console.log(err);
//   } else {
//       console.log(post);
//   }
// });

// User.findOne({name: "Lucy"}, function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         user.posts.push({
//             title: "How moving the football",
//             content: "Charlie Brown is soo gullable. Find someone that is gullable. :-)."
//         });
//         user.save(function(err, user){
//           if (err) {
//                 console.log(err);               
//           } else {
//                 console.log(user);
//           } 
//         });
//     }
// });
