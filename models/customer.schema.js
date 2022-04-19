const mongose = require("mongoose")
const customerSchema = mongose.Schema({
    name : {
        type : String,
        require : true
    },
    phoneNumber : {
        type : String,
        require : true
    },
    subsAccountId : {
        type : String,
        require : true
    },
    groubId : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        require : true
    }
})

module.exports = mongose.model("Customer", customerSchema)