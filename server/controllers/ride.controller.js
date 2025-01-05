const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');


exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { userId, pickup, destination, vehicleType } = req.body;
    try {
        const ride = await rideService.createRide({ userId:req.user._id , pickup, destination, vehicleType });
        res.status(201).json(ride);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}