import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const UserDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound , setVehicleFound] = useState(false);
  const [waitingForDriver , setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const onSubmit = async (data) => {
    console.log(data);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20,
      });
      gsap.to(panelClose.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelClose.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (ConfirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ConfirmRidePanel]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative">
      <h1 className="w-16 absolute left-5 top-5 font-bold text-lg">Destiny</h1>
      <div className="h-screen w-screen ">
        {/* image for temapary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
        />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h4
            ref={panelClose}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 right-3 text-2xl"
          >
            <i className="ri-arrow-down-fill"></i>
          </h4>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              placeholder="Add a pickup location"
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              {...register("pickup", { required: true })}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
            <input
              placeholder="Enter your Destination"
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              {...register("destination", { required: true })}
              onClick={() => {
                setPanelOpen(true);
              }}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed  w-full bg-white z-10 bottom-0 translate-y-full px-3 py-8"
      >
        <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed  w-full bg-white z-10 bottom-0 translate-y-full px-3 py-12"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed  w-full bg-white z-10 bottom-0 translate-y-full px-3 py-12 "
      >
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed  w-full bg-white z-10 bottom-0  px-3 py-12 "
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>

    </div>
  );
};

export default UserDashboard;
