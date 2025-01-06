import React from "react";
import motoImage from "../assets/moto.webp";
import autoImage from "../assets/auto.webp";
import carImage from  "../assets/car.png"

const VehiclePanel = ({ setVehiclePanel, setConfirmRidePanel , fare , setVehicleType }) => {
  return (
    <div>
      <h5
        // ref={panelClose}
        onClick={() => {
          setVehiclePanel(false);
        }}
        className="absolute opacity-1 right-6 top-6 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h4 className="text-2xl font-bold mb-5">Choose Vehicle</h4>

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehicleType("car");
        }}
        className="flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center justify-between p-3"
      >
        <img
          className="h-16"
          src={carImage}
        />
        <div className="w-1/2">
          <h4 className="font-base text-sm font-bold">
            DestinyGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{fare.car}</h2>
      </div>

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehicleType("moto");
        }}
        className="flex w-full border-2 mb-2 active:border-black bg-gray-100 rounded-xl items-center justify-between p-3"
      >
        <img className="h-16" src={motoImage} />
        <div className="w-1/2">
          <h4 className="font-base text-sm font-bold">
            Moto{" "}
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{fare.moto}</h2>
      </div>

      <div
        onClick={() => {
          setConfirmRidePanel(true);
          setVehicleType("auto");
        }}
        className="flex w-full border-2 mb-2 active:border-black bg-gray-100  rounded-xl items-center justify-between p-3"
      >
        <img className="h-16" src={autoImage} />
        <div className="w-1/2">
          <h4 className="font-base text-sm font-bold">
            Auto{" "}
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-gray-600 text-xs">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-xl font-semibold">₹{fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
