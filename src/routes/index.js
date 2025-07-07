const express = require("express");
const v1Routes = require("./v1"); // This must import the router directly

const router = express.Router();

router.use("/v1", v1Routes); // Now v1Routes is a valid router

module.exports = { apiRoutes: router };
