const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    source: {
        id: String,
        name: String,
    },
    author: String,
    title: String,
    description: String,
    url: String,
    urlToImage: String,
    publishedAt: String,
});

// const sourceSchema = new Schema({
//     source: {
//         id: String,
//         name: String,
//     },
//     articles: [articleSchema],
// });

// const Articles = mongoose.model('Articles', sourceSchema);
const Articles = mongoose.model('Articles', articleSchema);


module.exports = { Articles };