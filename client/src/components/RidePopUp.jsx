import React from "react";
import personImage from "../assets/person.jpg";

const RidePopUp = ({ setRidePopUpPanel, setConfirmRidePopUpPanel }) => {
  return (
    <div>
      <h5
        // ref={panelClose}
        onClick={() => {
          setRidePopUpPanel(false);
        }}
        className="absolute opacity-1 right-6 top-12 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>

      <h4 className="text-2xl font-bold mb-5">New Ride Availabel</h4>

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

        <div className="flex items-center justify-between gap-x-8">
          <button
            onClick={() => {
              setConfirmRidePopUpPanel(true);
            }}
            className="w-full  text-white font-semibold rounded-lg bg-green-600 p-2 px-10"
          >
            Accept
          </button>

          <button
            onClick={() => {
              setRidePopUpPanel(false);
            }}
            className="w-full  text-white font-semibold rounded-lg bg-red-600 p-2 px-10"
          >
            Ignore
          </button>
        </div>
      </div>
    </div>
  );
};

export default RidePopUp;
