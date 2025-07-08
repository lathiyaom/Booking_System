const axios = require('axios')

const { BookingRepository } = require("../repositories")

const db = require("../models")

const AppError = require('../utils/error/app-error');

const { ServerConfig } = require("../config")
const { StatusCodes } = require('http-status-codes')
const { message } = require('../utils/common/error-response')

async function createBooking(data) {
    console.log(ServerConfig.FLIGHT_SERVICE)
    return new Promise((resolve, reject) => {
        const response = db.sequelize.transaction(async function bookingImpl(t) {
            console.log(`localhost:3000/api/v1/flights/${data.flightId}`)

            const flight = await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flight/${data.flightId}`)

            const flightData = flight.data.data;

            if (data.noofSeats > flightData.totalSeats) {

                reject(new AppError("Requied no of seats are not available", StatusCodes.BAD_REQUEST))
            }
            console.log(flight);
            resolve(true)
        })
    })



}


module.exports = {
    createBooking
}