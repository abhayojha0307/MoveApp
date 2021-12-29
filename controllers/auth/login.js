const infologger=require('../../configuration/logger')

module.exports.getLogin=(req,res,next)=>{
    infologger.info('hello')
    res.send('welcome to the login page')
}