import * as React from 'react';
import { faUser, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authBG from "../../assets/bg.png"
import logoApp from "../../assets/logo_transparent.png"

export interface LoginProps {
}

export function Login (props: LoginProps) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="basis-1/2 bg-slate-200 sm:basis-0">
        <img
          className="w-full h-full object-contain"
          src={authBG}
        />
      </div>
      <div className="basis-1/2 justify-between place-items-center flex-col flex bg-slate-200">
        <span className="mb-10">
        </span>
        <div className="w-1/2 flex flex-col justify-center items-center">
          <div className="w-40 h-40 rounded-full bg-slate-300 flex justify-center items-center mb-4 shadow-xl ring-4">
            {/* <FontAwesomeIcon icon={faUser} 
              size="4x"
              className=""
              inverse
            /> */}
            <img
              src={logoApp}
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Email</span>
              <input placeholder="Your email" type="email" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate">Password</span>
              <input placeholder="Your password" type="password" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
          </div>
          <div className="w-full  mt-10 flex flex-row justify-between">
            <div className="truncate">
              <input
                type="checkbox"
                className="cursor-pointer border-slate-400 ml-2"
              />
              <span className="text-gray-700 font-light text-lg ml-2">
                Remember
              </span>
            </div>
            <span className="text-blue-500 font-semibold text-lg mx-2 cursor-pointer truncate">
              Forgot Password?
            </span>
          </div>
          <div className=" w-full mt-10">
            <button className="btn-success w-full py-3 text-xl">Login</button>
          </div>
          <div className=" w-full mt-2 btn-danger flex place-content-center flex-row text-xl">
            <button className="mr-2">
              <FontAwesomeIcon icon={faGoogle} 
                className=""
                inverse
              />
            </button>
            <span className="truncate md:invisible">Signin with Google</span>
          </div>
          <div className="btn-primary w-full mt-2 flex place-content-center flex-row text-xl">
            <button className="mr-2">
              <FontAwesomeIcon icon={faFacebook} 
                className=""
                inverse
              />
            </button>
            <span className="truncate md:invisible">Signin with Facebook</span>
          </div>
        </div>
        <span className="mb-10 text-xl text-gray-700">
          Don't have an account yet? 
          <span
            className="font-semibold ml-2 text-blue-500 text-xl"
          >Sign Up
          </span>
        </span>
      </div>
    </div>
  );
}
