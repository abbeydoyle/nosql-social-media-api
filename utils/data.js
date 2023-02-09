const usernameSeeds = [
      'ironman',
      'captainamerica',
      'blackpanther',
      'shangchi',
      'spiderman',
      'blackwidow',
      'scarletwitch',
      'thor',
      'hulk'
];

const thoughtSeeds = [
      'I wonder who will pay for this city we destroyed',
      'Avengers Assemble',
      `I'm sore`,
      'This suit is too tight',
      'Stark tower is overrated',
      'This alien tech is pretty good',
      'Infinity stones again?',
      'Maybe we should all go to therapy over the things that made us superheroes',
      'Not the time space continuum again',
      'I love you 3000',
      `Mr. Stark I don't feel so good`
];

const reactionSeeds = [
      'so true',
      'love that',
      'rip',
      'avengers assemble',
      `you're annoying`,
      'why are we friends',
      'social media is pointless',
      'lol',
      'hard pass',
      'smh',
      'ugh'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
      `${getRandomArrItem(usernameSeeds)}`;

const getRandomThought = () => 
      `${getRandomArrItem(thoughtSeeds)}`;

const getRandomReaction = (int) => {
      const results = [];
      for (let i = 0; i < int; i++) {
            results.push({
              reactionBody: getRandomArrItem(reactionSeeds),
              username: getRandomArrItem(usernameSeeds),
            });
      }
      return results;
}

module.exports = { getRandomUsername, getRandomThought, getRandomReaction };