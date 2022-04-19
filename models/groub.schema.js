const mongose = require("mongoose")
const groubSchema = mongose.Schema({
    name : {
        type : String,
        require : true
    },
    totalMember : {
        type : String,
        require : true
    },
    subsAccountId : {
        type : String,
        require : true
    },
    statusGroub : {
        type : String,
        require : true
    },
    durationSubleft : {
        type : String,
        require : true
    },
    payerAccount : {
        type : String,
        require : true
    },
    slotsLeft : {
        type : Number,
        require : true
    },
    startDate : {
        type : Date,
        require : true
    },
    endDate : {
        type : Date,
        require : true
    },
    createdAt : {
        type : Date,
        require : true
    }
})

module.exports = mongose.model("Groub", groubSchema)