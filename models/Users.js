const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
    },
    date: {
        type: Date,
        default: function() {
            return new Date
        }
    }
})

const User = mongoose.model('user', UserSchema);
module.exports = User;