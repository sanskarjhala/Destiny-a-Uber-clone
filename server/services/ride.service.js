const rideModel = require("../models/ride.model");
const mapService = require("./maps.service");
const crypto = require("crypto");

const getOtp = (num) => {
  const otp = crypto
    .randomInt(0, Math.pow(10, num))
    .toString()
    .padStart(num, "0");
  return otp;
};

exports.getfare = async (pickup, destination) => {
  if (!pickup || !destination)
    throw new Error("Pickup and Destination are required");

  const distanceTime = await mapService.getDistanceTime(pickup, destination);
  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distanceTime.distance.value / 1000) * perKmRate.auto +
        (distanceTime.duration.value / 60) * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distanceTime.distance.value / 1000) * perKmRate.car +
        (distanceTime.duration.value / 60) * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distanceTime.distance.value / 1000) * perKmRate.moto +
        (distanceTime.duration.value / 60) * perMinuteRate.moto
    ),
  };

  return fare;
};

exports.createRide = async ({
  userId,
  pickup,
  destination,
  vehicleType,
  fare,
}) => {
  if (!userId || !pickup || !destination || !vehicleType) {
    throw new Error("userId, pickup, destination and vehicleType are required");
  }
  // const fare = await getfare(pickup, destination);
  const ride = new rideModel({
    user: userId,
    pickup,
    destination,
    otp: getOtp(6),
    fare: fare,
  });
  return ride.save();
};
