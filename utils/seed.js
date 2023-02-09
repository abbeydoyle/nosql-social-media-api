const connection = require('../config/connection');
const { User, Thought, Reaction } = require('../models');
const { getRandomUsername, getRandomThought, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
      console.log('connected');

      await User.deleteMany({});
      await Thought.deleteMany({});
      await Reaction.deleteMany({});

      // const users = [];

      // for (let i = 0; i<10; i++) {
      //       const thoughts = getRandomThought(2);
      //       const username = getRandomUsername();

      //       for (let j = 0; j<2; j++) {
      //             c
      //       }
      // }

      // const thoughts = [];

      // for (let i = 0; i < 11; i++) {
      //       const reactions = getRandomReaction(11);
      //       const thoughtText = getRandomThought();
      //       const username = getRandomUsername();

      //       thoughts.push({
      //             thoughtText,
      //             username,
      //             reactions,
      //       })

      // }

      // await Thought.collection.insertMany(thoughts);

      const users  = [];

      for (let j = 0; j<9; j++) {

            const username = getRandomUsername();
            const email = `${getRandomUsername} + '@gmail.com'`;
            const thoughts = [];

            for (let i = 0; i < 11; i++) {
                  const reactions = getRandomReaction(11);
                  const thoughtText = getRandomThought();
                  const username = getRandomUsername();
      
                  thoughts.push({
                        thoughtText,
                        username,
                        reactions,
                  })
      
            };

            const friends = getRandomUsername(2);

            users.push({
                  username,
                  email,
                  thoughts,
                  friends,
            })
      }

      await Thought.collection.insertMany(thoughts);

      await User.collection.insertMany(users)

      console.table(thoughts);
      console.table(users);
      console.info('Seeding complete!');
      process.exit(0);

})