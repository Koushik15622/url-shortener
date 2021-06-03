const mongoose = require('mongoose');
const cs = "mongodb+srv://aDm1n:"+process.env.MONGO_PASSWORD+"@cluster0.lwfsx.mongodb.net/urls_db?retryWrites=true&w=majority";
module.exports.connectpd=function(){
mongoose.connect(cs,{useNewUrlParser:true,useUnifiedTopology: true});
const db = mongoose.connection;
db.on('connected',function(){
    console.log('db connected');
})
db.on('error',function(err){
    console.log('err msg '+err);
})
db.on('disconnected',function(){
    console.log('Disconnected');
})
}