const rideService = require("../services/ride.service");
const { validationResult } = require("express-validator");
const mapService = require('../services/maps.service');
const rideModel = require("../models/ride.model");
const { sendMessageToSocketId } = require("../socket");


exports.createRide = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { pickup, destination, vehicleType, fare } = req.body;
  try {
    const ride = await rideService.createRide({
      userId: req.user._id,
      pickup,
      destination,
      vehicleType,
      fare,
    });
    res.status(201).json(ride);
    const pickupCoordinates = await mapService.getAddressCoordinates(pickup)
    console.log("Pickup-Coordinates " , pickupCoordinates)

      // console.log("Before calling captains in radius")
    const captainsInRadius = await mapService.getCaptainsInTheRadius(
      pickupCoordinates.ltd,
      pickupCoordinates.lng,
      5
    );
    console.log("after calling captains in radius: " , captainsInRadius);

    ride.otp = ""

    const rideWithUser = await rideModel.findOne({ _id: ride._id }).populate('user');

    captainsInRadius.map(captain => {

        sendMessageToSocketId(captain.socketId, {
            event: 'new-ride',
            data: rideWithUser
        })

    })

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
};
