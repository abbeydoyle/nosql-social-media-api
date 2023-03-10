const { User, Thought } = require('../models');

module.exports = {
      // get all users
      getUsers(req, res) {
            User.find()
            .then((users) => res.json(users))
            .catch((err) => {res.status(500).json(err); console.log(err)});
      },

      // get single user by id
      getSingleUser(req, res) {
            User.findOne({ _id: req.params.userId })
            .select('-__v')
            .then((user) =>
                  !user
                        ? res.status(404).json({ message: 'No user with this id' })
                        : res.json(user)
            )
      },

      // create user
      createUser(req, res) {
            User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                  console.log(err);
                  return res.status(500).json(err);
            })
      },

      // delete user by id
      deleteUser(req, res) {
            User.findOneAndDelete({ _id: req.params.userId })
            .then((user) =>
                  !user
                        ? res.status(404).json({ message: 'No user with this id' })
                        : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and thoughts deleted' }))
            .catch((err) => res.status(500).json(err));
      },

      // update user by id
      updateUser(req, res) {
            User.findOneAndUpdate(
                  { _id: req.params.userId },
                  { $set: req.body },
                  { runValidators: true, new: true }
            )
            .then((user) =>
                  !user
                        ? res.status(404).json({ message: 'No user with this id' })
                        : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
      },

      // add friend with user id
      addFriend(req, res) {
            console.log('You are adding a friend');
            console.log(req.body);
            User.findOneAndUpdate(
                  { _id: req.params.userId },
                  { $addToSet: { friends: req.params.friendId } },
                  { runValidators: true, new: true }
            )
            .then((user) =>
            !user
                  ? res
                        .status(404)
                        .json({ message: 'No user found with that ID' })
                  : res.json(user)
            )
            .catch((err) => 
                  res.status(500).json(err));
      },

      // remove friend with user id
      removeFriend(req, res) {
            console.log('You are removing a friend');
            console.log(req.body);
            User.findOneAndUpdate(
                  { _id: req.params.userId },
                  { $pull: { friends: req.params.friendId } },
                  { runValidators: true, new: true }
            )
            .then((user) =>
            !user
                  ? res
                        .status(404)
                        .json({ message: 'No user found with that ID' })
                  : res.json(user)
            )
            .catch((err) => 
                  res.status(500).json(err));
      }
}