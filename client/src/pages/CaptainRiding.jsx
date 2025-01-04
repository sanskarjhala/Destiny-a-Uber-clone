import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <h1 className="w-16 font-bold text-lg">Destiny</h1>
        <Link
          to="/dashboard"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>

      <div className="h-1/5 p-8 bg-yellow-300 flex flex-col items-center gap-y-3 rounded-xl relative">
        <h5
          // ref={panelClose}
          onClick={() => {}}
          className="absolute opacity-1 mx-auto top-0 text-2xl"
        >
          <i className="ri-arrow-down-wide-fill"></i>
        </h5>
        <h4 className="font-medium text-xl">4 km Away</h4>
        <button
          onClick={() => {
            setFinishRidePanel(true)
          }}
          className="mx-auto text-white font-semibold rounded-lg bg-green-600 p-2 px-10"
        >
          Complete Ride
        </button>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed  w-full bg-white z-10 translate-y-full bottom-0  px-3 py-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
