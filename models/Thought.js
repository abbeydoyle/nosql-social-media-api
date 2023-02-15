// dependencies
const { Schema, model, Types } = require('mongoose');
const reactionSchema = require('./Reaction');

// schema to create thought model
const thoughtSchema = new Schema(
      {
            thoughtText: {
                  type: String,
                  required: true,
                  minlength: 1,
                  maxlength: 280
            },

            createdAt: {
                  type: Date,
                  default: Date.now
            },

            username: {
                  type: String,
                  required: true,
            },

            reactions: [
                  reactionSchema
            ],
      },

      {
            toJSON: {
                  virtuals: true,
                  getters: true,
            },

            id: false,
      }
);

// virtual to retrieve the length of the thought's reactions array field on query
thoughtSchema.virtual(`reactionCount`).get(function() {
      return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;