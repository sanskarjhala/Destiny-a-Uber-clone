import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        to="/dashboard"
        className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>

      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">sanskar </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04ZA5100</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
            <h1 className="text-lg font-semibold"> 678905 </h1>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center gap-5">
          <div className="w-full mt-5">
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
        </div>
        <button className="w-full mt-5 text-white font-semibold rounded-lg bg-green-600 p-2">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
