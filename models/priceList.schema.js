const mongose = require("mongoose")
const priceListSchema = mongose.Schema({
    accountName : {
        type : String,
        require : true
    },
    accountType : {
        type : String,
        require : true
    },
    priod : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        require : true
    },
    desc : {
        type : Number,
        require : true
    },
    createdAt : {
        type : Date,
        require : true
    }
})

module.exports = mongose.model("PriceList", priceListSchema)