const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomUsername, getRandomThought, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
      console.log('connected');

      await User.deleteMany({});
      await Thought.deleteMany({});

      const users  = [];
      const thoughts = [];
      const friends = [];

      for (let j = 0; j<3; j++) {

            const username = getRandomUsername();

            const getEmail = () => {
                  return username + "@gmail.com"
            }

            const email = getEmail();

            for (let i = 0; i < 2; i++) {
                  const reactions = getRandomReaction(2);
                  const thoughtText = getRandomThought();
                  const username = getRandomUsername();
      
                  thoughts.push({
                        thoughtText,
                        username,
                        reactions,
                  })
                  console.log(thoughtText, username, reactions)
      
            };

            // FIXME: needs to return id not actual name
            const friends = getRandomUsername(2);

            // let friendArray = db.collection("User").

            users.push({
                  username,
                  email,
                  thoughts,
                  // friends,
            })
            console.log(username, email, thoughts, friends)

            User.collection.insert(users, function(err) {
                  if (err) return;
                  var objectId = objectToInsert._id;
                  friends.push(objectId);
                  users.push(friends)
            })
      }

      await Thought.collection.insertMany(thoughts);

      // await User.collection.insertMany(users)
      
      console.table(thoughts);
      console.table(users);
      console.info('Seeding complete!');

      // console.log(friends);
      // console.log(objectId);
      process.exit(0);

})