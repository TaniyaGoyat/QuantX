const express=require("express");
const app=express();
require("dotenv").config()
const mongoose=require('mongoose');
const {HoldingsModel}=require("./models/HoldingsModel")
const {PositionsModel}=require("./models/PositionsModel")
const {OrdersModel}=require("./models/OrdersModel")
const bodyParser= require("body-parser");
const cors=require("cors");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");



const PORT=process.env.PORT || 3002;
const URL= process.env.MONGO_URL;
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true
  }));
  
app.use(bodyParser.json());


app.use(cookieParser());

app.use(express.json());


//Database connection
main()
.then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(URL);       // check
}

app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingsModel.find({});
    res.send(allHoldings);
})

app.get("/allPositions",async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.send(allPositions);
})

app.post("/newOrder",async (req,res)=>{
    let newOrder=new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
  
   console.log(newOrder);
    await HoldingsModel.insertOne(newOrder.toObject());
    newOrder.save();
    res.send("Order saved");
})

app.get("/allOrders",async(req,res)=>{
    let allOrders=await OrdersModel.find({});
    res.send(allOrders)
})


app.use("/", authRoute);

app.listen(PORT,()=>{
    console.log("App is listening to port");
})