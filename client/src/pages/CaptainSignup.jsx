import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { captainSignup } from "../services/operations/captainApi";

const CaptainSignup = () => {

    const {captain , setCaptain } = useContext(CaptainDataContext);
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const newCaptain = {
      fullName: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      email: data.email,
      password: data.password,
      vehicle: {
        color: data.vehicleColor,
        plate: data.vehiclePlate,
        capacity: data.vehicleCapacity, // There may be a Probelm
        vehicleType: data.vehicleType,
      },
    };

    captainSignup(newCaptain , navigate , setCaptain);

  };

  return (
    <div className="p-7 h-screen flex flex-col max-sm:justify-between">
      <h1 className=" sm:ml-10 font-bold text-5xl  text-red-500">Destiny</h1>

      <div className="sm:flex sm:justify-evenly sm:ml-10 sm:my-20 sm:items-center my-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <div className="form-style-web">
            <label htmlFor="fullName" className="label">
              What's your name
            </label>
            <input
              placeholder="Firstname"
              {...register("firstName", { required: true })}
              id="firstName"
              className="bg-[#eeeeee] , px-8 py-4 my-2 rounded-xl"
            />
            {errors.firstName && (
              <span className="text-xs ml-2 text-red-400 tracking-wide">
                please enter firstName
              </span>
            )}
          </div>
          <div className="form-style-web">
            <input
              className="bg-[#eeeeee] , px-8 py-4 my-2 rounded-xl"
              placeholder="LastName"
              {...register("lastName", { required: true })}
              id="fullName"
            />
          </div>
          <div className="form-style-web">
            <label className="label" htmlFor="email">
              What's your email
            </label>
            <input
              className="bg-[#eeeeee] , px-8 py-4 my-2 rounded-xl"
              placeholder="example@gmail.com"
              {...register("email", { required: true })}
              id="email"
            />
            {errors.email && (
              <span className="text-xs ml-2 text-red-400 tracking-wide">
                please enter email
              </span>
            )}
          </div>
          <div className="form-style-web">
            <label className="label" htmlFor="password">
              Your password
            </label>
            <input
              placeholder="enter your password"
              className="bg-[#eeeeee] , px-8 py-4 my-2 rounded-xl"
              id="password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-xs ml-2 text-red-400 tracking-wide">
                please enter password
              </span>
            )}
          </div>
          <div className="form-style-web">
            <label className="label" htmlFor="vehicle-information"></label>
            <input
              id="vehicle-information"
              className="bg-[#eeeeee] , px-8 py-4 my-2 rounded-xl"
              placeholder="registration number"
              {...register("vehiclePlate", { required: true })}
            />
            {errors.password && (
              <span className="text-xs ml-2 text-red-400 tracking-wide">
                please enter registration number
              </span>
            )}
            <input
              id="vehicle-information"
              className="bg-[#eeeeee] , px-8 py-4 my-2 rounded-xl"
              placeholder="Vehicle Color"
              {...register("vehicleColor", { required: true })}
            />
            {errors.password && (
              <span className="text-xs ml-2 text-red-400 tracking-wide">
                please enter Vehicle Color
              </span>
            )}
            <input
              type="number"
              id="vehicle-information"
              className="bg-[#eeeeee] , px-8 py-4 my-2 rounded-xl"
              placeholder="vehicle capacity"
              {...register("vehicleCapacity", { required: true })}
            />
            {errors.vehicleCapacity && (
              <span className="text-xs ml-2 text-red-400 tracking-wide">
                please enter vehicle capacity
              </span>
            )}
            <select
              id="vehicle-information"
              className="bg-[#eeeeee] w-1/2 px-8 py-4 my-2 rounded-xl"
              placeholder="vehicle Type"
              {...register("vehicleType", { required: true })}
            >
              <option value="" disabled></option>
              <option value={"car"}>Car</option>
              <option value={"moto"}>Bike</option>
              <option value={"auto"}>Auto</option>
            </select>
            {errors.password && (
              <span className="text-xs ml-2 text-red-400 tracking-wide">
                please enter vehicle Capacity
              </span>
            )}
          </div>

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold px-4 py-2 rounded-lg w-full my-2 duration-200 hover:scale-110"
          >
            Create Captain Account
          </button>
          <p className="text-center">
            Already have a account?{" "}
            <Link to="/captain-login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
        <img />
      </div>

      <div>
        <p className="text-[10px] mt-6 leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
