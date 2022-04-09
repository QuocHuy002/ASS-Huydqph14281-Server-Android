const  mongoose = require('mongoose')
mongoose.connect('mongodb+srv://doh8733:huy123456@cluster0.do5qh.mongodb.net/book')

const userSchema = new mongoose.Schema({name:'String',pass:'String',email:'String'})
const Users = mongoose.model('User',userSchema)
module.exports= Users
