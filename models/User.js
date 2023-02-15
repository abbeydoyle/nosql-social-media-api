// dependencies
const { Schema, model, Types } = require('mongoose');

// schema to create user model
const userSchema = new Schema(
      {
            username: {
                  type: String,
                  unique: true,
                  required: true,
                  trim: true
            },

            email: {
                  type: String,
                  unique: true,
                  required: true,
                  match: [
                        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                        `This is not a valid email address`
                  ]
            },

            thoughts: [{
                  type: Schema.Types.ObjectId,
                  ref: `Thought`
            }],

            friends: [{
                  type: Schema.Types.ObjectId,
                  ref: `User`
            }],
      },

      {
            toJSON: {
                  virtuals: true,
                  getters: true
            },

            id: false,
      }
);

// virtual to retrieve the length of the user's friends array field on query
userSchema.virtual(`friendCount`).get(function() {
      return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;