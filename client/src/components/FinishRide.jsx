import React from "react";
import personImage from "../assets/person.jpg";
import { Link } from "react-router-dom";

const FinishRide = ({setFinishRidePanel}) => {

  return (
    <div className="h-[90%]">
      <h5
        // ref={panelClose}
        onClick={() => {
            setFinishRidePanel(false);
        }}
        className="absolute opacity-1 right-6 top-12 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <h4 className="text-2xl font-bold mb-5">Finish Ride</h4>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src={personImage}
          />
          <h2 className="text-xl font-medium">Harsh Patel</h2>
        </div>

        <h5 className="text-xl font-semibold">2.2 KM</h5>
      </div>

      <div className="flex flex-col justify-between items-center gap-5">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-range-line"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Tabalb, Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Tabalb, Ahemdabad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 ">
            <i className="text-lg ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">$193.60</h3>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link
            to={"/captain-dashboard"}
            className="w-full mt-5  text-lg flex justify-center bg-green-600 text-white font-semibold p-3 rounded-lg"
          >
            Finish Ride
          </Link>

          <p className="text-red-500 mt-6 text-sm">Click On finish Ride If have completed the payment</p>
        </div>

        
      </div>
    </div>
  );
};

export default FinishRide;
