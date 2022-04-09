const BookModel = require('../models/book.model')
const mongoose = require("mongoose");
exports.GetAll = async (req, res, next) => {
   //  mongoose.connect('mongodb+srv://doh8733:huy123456@cluster0.do5qh.mongodb.net/book')
   // const  db = mongoose.connection;
   //  db.collection('books').find().toArray(
   //      function (error, result){
   //          if (error){
   //              console.log(error)
   //              res.sendStatus(500)
   //          }
   //          else {
   //              res.send(result)
   //          }
   //      }
   //  )
   //  res.render('./api/api-book')
}
exports.GetOnce = async (req, res, next) => {
    res.render('./api/api-book')
}