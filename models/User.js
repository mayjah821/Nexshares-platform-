const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({

username:{
type:String,
required:true
},

email:{
type:String,
required:true,
unique:true
},

password:{
type:String,
required:true
},

verificationCode:String,
codeExpiry:Date,

verified:{
type:Boolean,
default:false
},

balance:{
type:Number,
default:0
},

referralCode:{
type:String,
unique:true
},

referredBy:{
type:String,
default:null
},

referralCommission:{
type:Number,
default:0
},

referralCount:{
type:Number,
default:0
},
teamLevel:{
type:Number,
default:0
},

activePackage:String,

shares:{
type:Number,
default:0
},

dailyProfit:{
type:Number,
default:0
},

packageDuration:{
type:Number,
default:0
},

packageStartDate:Date,
lastProfitUpdate:Date

})

module.exports = mongoose.model("User",UserSchema)
