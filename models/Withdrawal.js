const mongoose = require("mongoose")

const WithdrawalSchema = new mongoose.Schema({

email:{
type:String,
required:true
},

amount:{
type:Number,
required:true
},

mpesaNumber:{
type:String,
required:true
},

mpesaName:{
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

module.exports = mongoose.model("Withdrawal",WithdrawalSchema)
