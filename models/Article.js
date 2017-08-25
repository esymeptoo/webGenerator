const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    articleID: {
        type: Schema.Types.ObjectId,
        required: true,
        default: function () {
            return new mongoose.Types.ObjectId
        }
    },
    authorId: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    date: {
        type: Date,
        default: function() {
            return new Date
        }
    }
})

const Article = mongoose.model('article', ArticleSchema);
module.exports = Article;