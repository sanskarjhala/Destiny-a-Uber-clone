import React from "react";
import { Link } from "react-router-dom";
import Form from "../common/Form";

const UserLogin = () => {
  return (
    <div className="p-7 h-screen flex flex-col max-sm:justify-between">
      <h1 className=" sm:ml-10 font-bold text-5xl  text-red-500">Destiny</h1>

      <div className="sm:flex sm:justify-evenly sm:ml-10 sm:my-20 sm:items-center">
        <Form text1={"New here?"} text2={"Create new Account"} user={true} />

        <img />
      </div>

      <div className="sm:flex sm:justify-evenly sm:ml-10 sm:items-center">
        <Link
          to={"/captain-login"}
          className="max-sm:flex w-full sm:w-60 sm:text-center rounded-lg font-semibold bg-[#10b461] py-2 justify-center"
        >
          Login as Captain
        </Link>
        <div className="w-2"></div>
      </div>
    </div>
  );
};

export default UserLogin;
