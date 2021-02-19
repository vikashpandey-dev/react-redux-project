var express = require('express');
var router = express.Router();
var userschema=require('../Modules/user');
/* GET home page. */

router.get('/', function(req, res, next) {
res.send("get method by api")
})
router.post('/insert', function(req, res) {
    var name=req.body.name;
    console.log(name);
var newuser=new userschema({
    name:name
});
newuser.save((err,doc)=>{
    if(err) throw err;
 console.log(doc);
    res.status(200).json({
        message:"Record Inserted",
        result:doc
    })
})
})
router.delete('/delete/:id', (req, res) => {
var id =req.params.id;
console.log(id);
var deleterecord=userschema.findByIdAndDelete({_id:id});

deleterecord.exec((err,data)=>{
    if(err) throw err;
    res.status(201).json({
        message:"Recorded Deleted",
        data:data
    })
}) 
});
//get all record api
router.get('/find', (req, res,next) => {
    const finddata=userschema.find({});
    finddata.exec((err,data)=>{
        if(err) throw err
        res.status(200).json({
            message:"All Recorded Find",
            data:data
        })
    })
});
module.exports = router;
