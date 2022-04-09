var express = require('express');
var router = express.Router();

const  mongoose = require('mongoose')
const apitruyen = require('../Controllers/ApiTruyen')
router.get('/',(req,res,next)=>{
    res.send('well com top API')
})
router.get('/api',function (req,res,next) {
    mongoose.connect('mongodb+srv://doh8733:huy123456@cluster0.do5qh.mongodb.net/book')
    const db = mongoose.connection;
    db.collection('books').find().toArray(
        function (err, users){
            if (err){
                res.sendStatus(500)
                console.log(err)
            }else {
                res.send(users)
            }
        }
    )
},apitruyen.GetOnce)

module.exports = router;