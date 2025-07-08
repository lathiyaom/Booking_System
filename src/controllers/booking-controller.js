const { BookingServices } = require("../services")

const { StatusCodes } = require("http-status-codes")
const { SuccessResponse, ErrorResponse } = require("../utils/common");

async function createbooking(req, res) {
    try {
        const booking = await BookingServices.createBooking({
            flightId: req.body.flightId,
            userId: req.body.userId,
            noofSeats: req.body.noofSeats

        });
        SuccessResponse.data = booking;
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse);
    }
}


module.exports = {
    createbooking

}