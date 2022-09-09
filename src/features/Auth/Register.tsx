import * as React from 'react';
import authBG from "../../assets/bg.png"
import logoApp from "../../assets/logo_transparent.png"

export interface RegisterProps {
}

export function Register (props: RegisterProps) {
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
            <img
              src={logoApp}
            />
          </div>
          <div className="w-full flex flex-col">
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">First Name</span>
              <input placeholder="First name" type="text" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Last Name</span>
              <input placeholder="First name" type="text" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Gender</span>
              <select name="gender" id="gender" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl">
                <option value="male" className="grop px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md text-gray-700 text-xl">
                  Male
                </option>
                <option value="female" className="grop px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md text-gray-700 text-xl">
                  Female
                </option>
              </select>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Birthday</span>
              <input placeholder="Date of birth" type="date" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Email</span>
              <input placeholder="Your email" type="email" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate">Password</span>
              <input placeholder="Your password" type="password" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate">Repeat</span>
              <input placeholder="Repeat your password" type="password" className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"></input>
            </div>
          </div>
          <div className=" w-full mt-10">
            <button className="btn-primary w-full py-3 text-xl">Register</button>
          </div>
        </div>
        <span className="mb-10 text-xl text-gray-700">
        </span>
      </div>
    </div>
  );
}
