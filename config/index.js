const mongoose = require('mongoose')

const response = (res, statusCode, message, data=null) => {

    const dataRes = {
        statusCode : statusCode,
        message    : message,
    }

    if(data !== null){
        dataRes['data'] = data
    }

    return res.json(dataRes)
}

const database = async () => {
    mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, { useNewUrlParser: true }).then(res => {
        console.log("Database connect success!, apps running.");
    }).catch(err => {
        console.log("Database falied connect!, check db connection.");
    })
}

module.exports = {
    response,
    database
}