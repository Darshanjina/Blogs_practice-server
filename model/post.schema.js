var mongoose = require ('mongoose');

var schema = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    post_title:{
        type:String,
        require:true
    },
    post_cat:{
        type:String,
        require:true
    },
    post_body:{
        type:String,
        require:true
    },
},
{timestamps:true}
);

module.exports = mongoose.model('Blogs_post',schema);