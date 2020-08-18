var Post = require('../model/post.schema');

function insert (req,res){
    var postdata = new Post({
        username:req.body.username,
        post_title:req.body.post_title,
        post_cat:req.body.post_cat,
        post_body:req.body.post_body
    });

    postdata.save()
    .then(()=>{
        res.json({
            status:"OK",
            message:"Record Inserted Succesfully"
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}

function select(req,res){
    Post.find()
    .then((data)=>{
        res.json({
            status:"OK",
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}

function edit(req,res){
    Post.updateOne({_id:req.body._id},{
        username:req.body.username,
        post_title:req.body.post_title,
        post_cat:req.body.post_cat,
        post_body:req.body.post_body
    })
    .then(()=>{
        res.json({
            status:"OK",
            message:"Record Update Successfully"
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        })
    })
}

function remove(req,res){
    Post.deleteOne({_id:req.body._id})
    .then(()=>{
        res.json({
            status:"OK",
            message:"Record Delete"
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        })
    })
}

function sort(req,res){
    Post.find(req.body.query)
    .then((data)=>{
        res.json({
            status:"OK",
            message:data
        });
    })
    .catch((err)=>{
        res.json({
            status:"NOK",
            message:err
        });
    })
}

module.exports.insert = insert;
module.exports.select = select;
module.exports.edit = edit;
module.exports.remove = remove;
module.exports.sort = sort;