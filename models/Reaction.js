// dependencies
const { Schema, model, Types } = require('mongoose');

// not technically a model, only a schema

const reactionSchema = new Schema(
      {
            reactionId: {
                  type: Schema.Types.ObjectId,
                  default: () => new Types.ObjectId(),
            },

            reactionBody: {
                  type: String,
                  required: true,
                  maxlength: 50,
            },

            username: {
                  type: String,
                  required: true,
            },

            createdAt: {
                  type: Date,
                  default: Date.now,
            }
      },

      {
            toJSON: {
                  getters: true,
            },

            id: false
      }
)

module.exports = reactionSchema;