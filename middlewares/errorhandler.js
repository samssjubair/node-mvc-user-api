function errorhandler(err,req,res,next){
    res.send(err.messages)
}
module.exports=errorhandler;