import React from "react";
import carImage from "../assets/car.png";

const ConfirmRide = ({
  setConfirmRidePanel,
  setVehicleFound,
  createRide,
  pickup,
  destination,
  fare,
  vehicleType,
}) => {
  return (
    <div>
      <h5
        // ref={panelClose}
        onClick={() => {
          setConfirmRidePanel(false);
        }}
        className="absolute opacity-1 right-6 top-12 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <h4 className="text-2xl font-bold mb-5">Confirm Your Ride</h4>

      <div className="flex flex-col justify-between items-center gap-5">
        <img className="h-20" src={carImage} />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-range-line"></i>
            <div>
              {/* <h3 className="text-lg font-medium">562/11-A</h3> */}
              <p className="text-sm -mt-1 text-gray-600">{pickup}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              {/* <h3 className="text-lg font-medium">562/11-A</h3> */}
              <p className="text-sm -mt-1 text-gray-600">{destination}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{fare[vehicleType]}</h3>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setVehicleFound(true);
            setConfirmRidePanel(false);
            createRide();
          }}
          className="w-full mt-5 text-white font-semibold rounded-lg bg-green-600 p-2"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmRide;
