import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
import { userSignup } from "../services/operations/userApi";


const UserSignup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

   const {setUser} = useContext(UserDataContext);
   const navigate = useNavigate();
   

   

  const onSubmit = async (data) => {
      const newUser = {
        fullName:{
            firstName:data.firstName,
            lastName:data.lastName,
        },
        email:data.email,
        password:data.password,
      }

      userSignup(newUser , navigate , setUser);
      
  };

  return (
    <div className="p-7 h-screen flex flex-col max-sm:justify-between">
      <h1 className=" sm:ml-10 font-bold text-5xl  text-red-500">Destiny</h1>

      <div className="sm:flex sm:justify-evenly sm:ml-10 sm:my-20 sm:items-center">
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

          <button
            type="submit"
            className="bg-[#111] text-white font-semibold px-4 py-2 rounded-lg w-full my-2 duration-200 hover:scale-110"
          >
            Register
          </button>
          <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </form>
        <img />
      </div>

      <div className="sm:flex sm:justify-evenly sm:ml-10 sm:items-center">
        <Link
          to={"/captain-signup"}
        >
          
        </Link>
        <div className="w-2"></div>
      </div>
    </div>
  );
};

export default UserSignup;
