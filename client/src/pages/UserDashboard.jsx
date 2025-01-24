import React, { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
import { getLocationSuggestion } from "../services/operations/mapsApi";
import { createRideApi, getFare } from "../services/operations/rideApi";
import { SocketDataContext } from "../context/SocketContext";
import { UserDataContext } from "../context/UserContext";

const UserDashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [ConfirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound , setVehicleFound] = useState(false);
  const [waitingForDriver , setWaitingForDriver] = useState(false);
  const [pickupSuggestions, setPickupSuggestions ] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions ] = useState([]);
  const [activeField, setActiveField] = useState('');
  const [fare, setFare] = useState({});
  const [vehicleType, setVehicleType] = useState('');

  const [ pickup, setPickup ] = useState('')
  const [ destination, setDestination ] = useState('') 


  const panelRef = useRef(null);
  const panelClose = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  let deBouncerTimer;

  const { socket } = useContext(SocketDataContext);
  const { user } = useContext(UserDataContext);

  useEffect(() => {
    socket.emit('join' , {userType: "user" , userId: user._id})
  } , [user]);


  const onSubmit = async (data) => {
    console.log(data);
  };

  const handlePickupChange = async (e) => {
    setPickup(e.target.value);
    clearTimeout(deBouncerTimer);
    deBouncerTimer = setTimeout(async () => {
      const suggestions = await getLocationSuggestion({ input: e.target.value }, localStorage.getItem("token"));
      setPickupSuggestions(suggestions);
      console.log("pickup suggeastions" , suggestions);
    } , 1000)
    
  };

  const handleDestinationChange = async (e) => {
    setDestination(e.target.value);
    clearTimeout(deBouncerTimer);
    deBouncerTimer = setTimeout(async () => {
      const suggestions = await getLocationSuggestion({ input: e.target.value }, localStorage.getItem("token"));
      setDestinationSuggestions(suggestions);
      console.log("destination suggeastions" , suggestions);
    } , 1000)
  }

  async function findTrip() {
    setVehiclePanel(true)
    setPanelOpen(false)
    const response = await getFare({ pickup, destination }, localStorage.getItem("token"));
    setFare(response);
  }

  const createRide = async () => {
    const data = {
      pickup,
      destination,
      vehicleType,
      fare: fare[vehicleType]
    }
    const response = await createRideApi(data, localStorage.getItem("token"));
    console.log(response);
  }


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
              {...register("pickup", { required: true , onChange: (e) => handlePickupChange(e)})}
              onClick={() => {
                setPanelOpen(true);
                setActiveField('pickup');
              }}
            />
            <input
              placeholder="Enter your Destination"
              className="bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              {...register("destination", { required: true , onChange: (e) => handleDestinationChange(e) , value: destination})}
              onClick={() => {
                setPanelOpen(true);
                setActiveField('destination');
              }}
            />
          </form>
          
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
            setValue={setValue}
            findTrip={findTrip}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed  w-full bg-white z-10 bottom-0 translate-y-full px-3 py-8"
      >
        <VehiclePanel 
          setVehiclePanel={setVehiclePanel} 
          setConfirmRidePanel={setConfirmRidePanel}
          fare={fare}
          setVehicleType={setVehicleType}
           />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed  w-full bg-white z-10 bottom-0 translate-y-full px-3 py-12"
      >
        <ConfirmRide
         setConfirmRidePanel={setConfirmRidePanel} 
         setVehicleFound={setVehicleFound}
          createRide={createRide}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
         />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed  w-full bg-white z-10 bottom-0 translate-y-full px-3 py-12 "
      >
        <LookingForDriver 
          setVehicleFound={setVehicleFound}
          pickup={pickup}
          destination={destination}
          fare={fare}
          vehicleType={vehicleType}
        />
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
