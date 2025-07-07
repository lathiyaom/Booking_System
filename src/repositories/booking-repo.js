const CrudRepository = require("./crud-repo");

const { Booking } = require("../models")


class BookingRepository extends CrudRepository {
    constructor() {
        super(this.Booking)
    }
}

module.exports = BookingRepository;
