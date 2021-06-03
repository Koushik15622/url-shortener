const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const schema = new mongoose.Schema({
    key:String,
    longurl:String,
    shorturl:String,
    date:{
        type:Date,
        default:Date.now
    },
    createdAt: { type: Date, expires: 3600, default: Date.now }
},{timestamps:true});
//schema.index({createdAt: 1},{expireAfterSeconds: 3600});
const Url = mongoose.model('urls_datas',schema);
module.exports=Url;