
const personData=require('./../utils/person.json')
const fs = require('fs');
const path = require('path');
// const app = express();

// app.use(express.json());

module.exports.getAllUsers=(req,res)=>{
    const {limit}= req.query;
    const data= personData.data.slice(0,limit)
    // console.log("all")
    res.status(200).json({
        status: true,
        message: "success",
        data: data
    })
}

module.exports.getRandomUsers=(req,res)=>{
    const randomIndex = Math.floor(Math.random() * personData.data.length);
    const randomUser=personData.data[randomIndex]
    console.log(randomIndex)
    res.status(200).json({
        status: true,
        message: "success",
        data: randomUser
    })
}

module.exports.getSpecificUser=(req,res)=>{
    // console.log(req.params.id)
    const id= req.params.id;
    const user= personData.data.find(person=>person.id==id);
    // console.log(randomIndex)
    res.status(200).json({
        status: true,
        message: "success",
        data: user
    })
}

module.exports.saveAUser=(req,res)=>{
    const requiredProperties = ['mobile', 'name', 'photoUrl', 'address', 'gender'];

    for (const prop of requiredProperties) {
      if (!(prop in req.body)) {
        return res.status(400).send(`please provide all props`);
      }
    }
    // console.log(req.body)
    let data=personData.data
    const body=req.body;
    req.body.id=personData.data.length+1;
    data.push(body);
    const newData= {"data": data}

    fs.writeFileSync(path.join(__dirname, '..', 'utils', 'person.json'), JSON.stringify(newData));

    res.send('User saved to file!');

    
}

module.exports.deleteSpecificUser=(req,res)=>{
    
    let data=personData.data
    const {id}=req.params;
    let validation= data.find(dt=>dt.id==id)
    if(!validation){
        res.send('id not found ')
    }
    data= data.filter(dt=>dt.id !=id)
    // data.push(body);
    const newData= {"data": data}

    fs.writeFileSync(path.join(__dirname, '..', 'utils', 'person.json'), JSON.stringify(newData));

    res.send('User deleted from file!');

    
}

module.exports.updateUser=(req,res)=>{
    
    let data=personData.data
    const {id}=req.params;
    const index = data.findIndex((item) => item.id == id);

    if (index === -1) {
      res.send('id not found');
    }
  
    const updatedData = { ...data[index], ...req.body };
    data[index] = updatedData;
  
    fs.writeFileSync(path.join(__dirname, '..', 'utils', 'person.json'), JSON.stringify(data));
    console.log('done')

    res.send('User updated in file!');
}

module.exports.bulkUpdate=(req,res)=>{
    
    let data=personData.data;
    const updates = req.body;
    // const {id}=req.params;
    updates.forEach((update) => {
        const index = data.findIndex((item) => item.id == update.id);
    
        if (index !== -1) {
          const updatedData = { ...data[index], ...update };
          data[index] = updatedData;
        }
      });
    
    const newData= {"data": data}
  
    fs.writeFileSync(path.join(__dirname, '..', 'utils', 'person.json'), JSON.stringify(newData));
    // console.log(newData)

    res.send('bulk update in file!');
}