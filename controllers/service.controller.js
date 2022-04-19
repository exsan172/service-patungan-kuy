const config = require("../config")

const serviceController = {
    groub_all : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    groub_detail : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    groub_update : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    groub_delete : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },

    price_all : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    price_detail : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    price_update : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
    price_delete : (req, res, next) => {
        try {
            config.response(res, 200, "kontola")
            
        } catch (error) {
            config.response(res, 400, error.message)
        }
    },
}

module.exports = serviceController