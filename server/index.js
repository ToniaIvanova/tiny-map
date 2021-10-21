const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require('cors');
const stationRouter = require('./routers/station.router');
const productRouter = require('./routers/product.router');
const userRouter = require('./routers/user.router');

const app = express();
 
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useUnifiedTopology: true });
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cors());
 
mongoClient.connect(function(err, client){
  if(err) return console.log(err);
  
  app.locals.product = client.db("products").collection("Product");
  app.locals.station = client.db("products").collection("Station");
  app.locals.user = client.db("products").collection("User");
  app.locals.doneCount = client.db("products").collection("DoneCount");

  app.listen(3001, function(){
    console.log("App is ready...");
  });
});

app.use('/station', stationRouter);
app.use('/product', productRouter);
app.use('/user', userRouter);
