var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type:String,
    required:true
  },
  link: {
    type:String,
    required:true
  },
  summary: {
    type:String,
    required: true
  },
  note: [{
      type: Schema.Types.ObjectId,
      ref: 'note'
  }]
});

var article = mongoose.model('article', ArticleSchema);
module.exports = article;