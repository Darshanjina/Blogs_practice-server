var express = require('express');
var router = express.Router();
var postController = require('../controller/post.controller');
var userController = require('../controller/user.controller');
var jwt = require('jsonwebtoken');

router.post('/insert-post',funVerification,postController.insert);
router.get('/select-post',funVerification,postController.select);
router.post('/edit-post',funVerification,postController.edit);
router.post('/remove-post',funVerification,postController.remove);
router.post('/sort-post',funVerification,postController.sort);

router.post('/insert-user',userController.userInsert);
router.post('/verify-user',userController.verifyUser);

function funVerification(req,res,next){

    var bearerToken = req.headers['auth'];
    if(typeof(bearerToken) != undefined){
        jwt.verify(bearerToken,"1234",(err,data)=>{
            if(err){
                res.json({
                    status:'NOK',
                    message:err
                })
            }
            else{
                next();
            }
        })
    }
}

module.exports = router;