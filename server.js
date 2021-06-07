const express = require('express');
const bp = require('body-parser');
const db = require('./db/conn');
const shturl = require('./backend/short');
const app = express();
app.set('view engine', 'ejs');
var fnlurl;
app.use(express.static(__dirname+"/"));
app.use(express.json())
app.use(bp.urlencoded({extended:true}));
db.connectpd();
const port = process.env.PORT || 3000;
app.get('/',function(req,res){
    res.render('main',{url:''});
})
app.use('/',require('./backend/redirect'));
app.post('/short',async (req,res)=>{
   await shturl.shorturl(req,res);
   fnlurl=shturl.fnlurl.shorturl;
   res.render('main',{url:fnlurl});
});

app.listen(port,function(){
    console.log("started server on "+port);
})