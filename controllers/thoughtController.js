const { User, Thought } = require('../models');

module.exports = {
      // get all thoughts
      getThoughts(req, res) {
            Thought.find()
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
      },

      // get single thought by id
      getSingleThought(req, res) {
            Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                  !thought
                        ? res.status(404).json({ message: 'No thought with this id' })
                        : res.json(thought)
            )
      },

      // create thought
      createThought(req, res) {
            Thought.create(req.body)
            .then((thought) => res.json(thought))
            .catch((err) => {
                  console.log(err);
                  return res.status(500).json(err);
            })
      },

      // delete thought by id
      deleteThought(req, res) {
            Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
              !thought
                ? res.status(404).json({ message: 'No such thought exists' })
                : User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    { $pull: { thoughts: req.params.thoughtId } },
                    { new: true }
                  )
            )
            .then((user) =>
              !user
                ? res.status(404).json({
                    message: 'Thought deleted, but no user found',
                  })
                : res.json({ message: 'Thought successfully deleted' })
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
      },

      // update thought by id
      updateThought(req, res) {
            Thought.findOneAndUpdate(
                  { _id: req.params.thoughtId },
                  { $set: req.body },
                  { runValidators: true, new: true }
            )
            .then((thought) =>
                  !thought
                        ? res.status(404).json({ message: 'No thought with this id' })
                        : res.json(thought)
            )
            .catch((err) => res.status(500).json(err))
      },

      // add reaction with thought id
      addReaction(req, res) {
            console.log('You are adding a reaction');
            console.log(req.body);
            Thought.findOneAndUpdate(
                  { _id: req.params.thoughtId },
                  { $addToSet: { reactions: req.body } },
                  { runValidators: true, new: true }
            )
            .then((thought) =>
            !thought
                  ? res
                        .status(404)
                        .json({ message: 'No thought found with that ID' })
                  : res.json(thought)
            )
            .catch((err) => 
                  res.status(500).json(err));
      },

      // remove reaction with thought id
      removeReaction(req, res) {
            console.log('You are removing a reaction');
            console.log(req.body);
            Thought.findOneAndUpdate(
                  { _id: req.params.thoughtId },
                  { $pull: { reactions: { reactionId: req.params.reactionId } } },
                  { runValidators: true, new: true }
            )
            .then((thought) =>
            !thought
                  ? res
                        .status(404)
                        .json({ message: 'No thought found with that ID' })
                  : res.json(thought)
            )
            .catch((err) => 
                  res.status(500).json(err));
      }
}