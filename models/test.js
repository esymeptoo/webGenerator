const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const TestSchema = new Schema({
    articleID: {
        type: Schema.Types.ObjectId,
        ref: 'article',
        required: true,
        default: function () {
            return new mongoose.Types.ObjectId
        }
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    title: String,
    date: {
        type: Date,
        default: function() {
            return new Date
        }
    }
})
TestSchema.methods.findTitle  = function (cb) {
    return this.model('test').find({title: this.title}, cb)
}
TestSchema.methods.addTitle = function (cb) {
    return this.model('test').create(this.data, cb)
}
const Test = mongoose.model('test', TestSchema);
module.exports = Test;