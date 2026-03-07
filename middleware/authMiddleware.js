const jwt = require("jsonwebtoken")

module.exports = function(req,res,next){

try{

const authHeader = req.headers.authorization

if(!authHeader){
return res.json({
status:"error",
message:"Auth header missing"
})
}

const token = authHeader.split(" ")[1]

const decoded = jwt.verify(
token,
process.env.JWT_SECRET
)

req.user = decoded

next()

}catch(err){

console.log("AUTH ERROR:",err.message)

return res.json({
status:"error",
message:"Authentication failed"
})

}

}
