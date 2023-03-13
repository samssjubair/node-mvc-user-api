const express=require('express');
const { saveATool, getAllTools, getToolDetail } = require('../../controllers/tools.controller');
const limiter=require('../../middlewares/limiter');
const viewCount = require('../../middlewares/viewCount');
const router= express.Router();



// router.get('/',(req,res)=>{
//     res.send('tools send')
// })

// router.post('/',(req,res)=>{
//     res.send('tools added')
// })

router
.route('/')
.get(getAllTools)
.post(saveATool)

router.route('/:id').get(viewCount ,limiter ,getToolDetail);

module.exports=router;