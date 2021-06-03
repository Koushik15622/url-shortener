const express = require('express');
const validurl = require('valid-url');
const key = require('short-id');
const Url = require('../db/config');
const baseurl = "https://url-zf.herokuapp.com";
//console.log(baseurl+"test")
var shorturl;
module.exports.shorturl= async(req,res)=>{
    const longurl = req.body.orgurl;
    //console.log(longurl);
    if(!validurl.isUri(baseurl)){
        return res.status(401).json('Invalid')
    }
    const code = key.generate();
    if(validurl.isUri(longurl))
    {
        try{
             url = await Url.findOne({longurl})

            if(url){
                shorturl=url.shorturl;
                }

            else{
                shorturl = baseurl+'/'+code
                //console.log("else "+shorturl);
                url=new Url ({
                    key:code,
                    longurl,
                    shorturl,
                    date:new Date()
                })
                await url.save();
                //short=shorturl;
               
            }
        }
        catch(err){
            console.log(err);
        }
    }
    else{
        shorturl="Invalid URL"
        url=new Url({
            shorturl
        })
    }
   
    module.exports.fnlurl=url;
}

