module.exports.getAllTools= (req,res)=>{
    res.send('tools found hola')
}

module.exports.saveATool= (req,res)=>{
    res.send('tools saved')
}

module.exports.getToolDetail=(req,res)=>{
    res.status(400).send('specific tool')
}
