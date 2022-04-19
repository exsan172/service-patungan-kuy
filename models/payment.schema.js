const mongose = require("mongoose")
const paymentSchema = mongose.Schema({
    paymentName : {
        type : String,
        require : true
    },
    paymentAddres : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        require : true
    }
})

module.exports = mongose.model("PriceList", paymentSchema)