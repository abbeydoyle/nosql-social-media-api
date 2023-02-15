// dependencies
const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomUsername, getRandomThought, getRandomReaction } = require('./data');

// check for connection
connection.on('error', (err) => err);

connection.once('open', async () => {
      console.log('connected');

      // drop existing users and thoughts
      await User.deleteMany({});
      await Thought.deleteMany({});

      // empty arrays
      const users  = [];
      const thoughts = [];
      const friends = [];

      // loop to create users
      for (let j = 0; j<3; j++) {

            // creates username from seeds
            const username = getRandomUsername();

            // creates email from username
            const getEmail = () => {
                  return username + "@gmail.com"
            }

            const email = getEmail();

            // assigns random thoughts and reactions
            for (let i = 0; i < 2; i++) {
                  const reactions = getRandomReaction(2);
                  const thoughtText = getRandomThought();
                  const username = getRandomUsername();
      
                  // push model requirements to thought array
                  thoughts.push({
                        thoughtText,
                        username,
                        reactions,
                  })
                  console.log(thoughtText, username, reactions)
      
            };

            // FIXME: needs to return id not actual name
            // const friends = getRandomUsername(2);

            // let friendArray = db.collection("User").

            // push model requirements to user array
            users.push({
                  username,
                  email,
                  thoughts,
                  // friends,
            })
            console.log(username, email, thoughts)

            // User.collection.insert(users, function(err) {
            //       if (err) return;
            //       var objectId = objectToInsert._id;
            //       friends.push(objectId);
            //       users.push(friends)
            // })
      }

      // insert thought array to collection
      await Thought.collection.insertMany(thoughts);

      // insert user array to collection
      await User.collection.insertMany(users)
      
      console.table(thoughts);
      console.table(users);
      console.info('Seeding complete!');

      // console.log(friends);
      // console.log(objectId);
      process.exit(0);

})