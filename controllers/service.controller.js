const config = require("../config")

const serviceController = {
    index : (req, res, next) => {
        try {
            config.responsse(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    }
}

module.exports = serviceController