const express = require("express");
const cors = require("cors");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 4900;
const dbConnect = require("./utils/dbConnect");
const personsRouter = require("./routes/v1/users.route");
const viewCount = require("./middlewares/viewCount");
const errorhandler = require("./middlewares/errorhandler");
const personData=require('./utils/person.json')

app.use(cors());
app.use(express.json());

// sendOrderMail();

// app.use(viewCount)

dbConnect();

// app.use('/api/v1/tools',toolsRouter);
app.use('/api/v1/user',personsRouter)
// app.use('/api/v1/user',personsRouter)

// console.log(personData.data);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.all("*",(req,res)=>{
  res.send('No route found')
})

app.use(errorhandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// process.on('unhandledRejection',(error)=>{
//   console.log(error.name,error.message);
//   app.close(()=>{
//     process.exit(1);
//   })
// })

