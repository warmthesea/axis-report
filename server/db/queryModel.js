const mongoose = require('mongoose');
//const Schema = mongoose.Schema;


const articleSchema = mongoose.Schema({
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

// const querySchema = new Schema({
//     query: String,
//     articles: [articleSchema],
// });

// module.export = mongoose.model('Queries', querySchema);
module.exports = mongoose.model('Article', articleSchema);


// const sourceSchema = new Schema({
//     source: {
//         id: String,
//         name: String,
//     },
//     articles: [articleSchema],
// });