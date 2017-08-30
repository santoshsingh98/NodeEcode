var express = require('express');
var router = express.Router();
var fs = require('file-system');
var easyimg = require('easyimage');
var async = require('async');
var imageMagicHandler  = require('../utils/imageMagicHandler')

/* default route for image handler. */
router.get('/', function (req, res, next) {
    // will keep this in config file
    var dir = __dirname + '.\\..\\public\\images';
    var crouserArr = [];
    //reading the all content of folder
    fs.readdir(dir, (err, files) => {
        //async library for read each file
        async.forEach(files, function (item) { 
            var ImgArr = {};
            ImgArr.name = item;
            ImgArr.is3dImage = imageMagicHandler.is3dImage(dir,item);
            crouserArr.push(ImgArr)    
        }, function (err) {
           res.send({statusCode : 500, message : "Something went wrong" , description : "ERROR_EX" });
        });
         res.send({statusCode : 200, message : "Showing list of images" , data : crouserArr });
    });
});


module.exports = router;