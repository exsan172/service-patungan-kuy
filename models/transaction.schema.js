const mongose = require("mongoose")
const transactionSchema = mongose.Schema({
    customerId : {
        type : String,
        require : true
    },
    accountSubsId : {
        type : String,
        require : true
    },
    paymentId : {
        type : String,
        require : true
    },
    statusPayment : {
        type : String,
        require : true
    },
    createdAt : {
        type : Date,
        require : true
    }
})

module.exports = mongose.model("PriceList", transactionSchema)