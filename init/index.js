const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

main().then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Database not Connected");
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Wandershub");
}

const initDB = async()=>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj,owner:"675058ae38b4b8f735f86f10"}));
    await Listing.insertMany(initData.data);
    console.log("data inserted");
}

initDB();