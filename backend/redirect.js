const express = require('express');
const router = express.Router();
const url = require('../db/config');

router.get('/:code', async(req,res)=>{
    try{
        const u = await url.findOne({
            key:req.params.code
        })
        if(url)
        res.redirect(u.longurl);
        else
        res.status(404).send('not found');
    }
    catch(err)
    {
        console.log(err)
        res.status(500).send('server error');
    }
})

module.exports = router