// Load required packages
var mongoose = require('mongoose');



// Define our Transaction schema


var emailSchema = mongoose.Schema({
  templetename:{
    type: String,
    required: true
  },
  params:{
    type: String
  },
  subjects:{
    type: String,
  },
  content:{
    type: String
  },
  created:{
    type: Date
  },
  modified:{
    type: Date
  }
  ,
  status:{
    type: Number,
    default:1
  }
});

var email = module.exports = mongoose.model('mails', emailSchema);