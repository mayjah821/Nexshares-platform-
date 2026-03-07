const mongoose = require("mongoose")

const DepositSchema = new mongoose.Schema({

email:{
type:String,
required:true
},

amount:{
type:Number,
required:true
},

mpesaCode:{
type:String,
required:true
},

status:{
type:String,
default:"pending"
},

createdAt:{
type:Date,
default:Date.now
}

})

module.exports = mongoose.model("Deposit",DepositSchema)
