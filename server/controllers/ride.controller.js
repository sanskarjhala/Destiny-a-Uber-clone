const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');


exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination, vehicleType , fare } = req.body;
    try {
        const ride = await rideService.createRide({ userId:req.user._id , pickup, destination, vehicleType , fare });
        res.status(201).json(ride);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { pickup, destination } = req.query;
    try {
        const fare = await rideService.getfare(pickup, destination);
        res.status(200).json(fare);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}