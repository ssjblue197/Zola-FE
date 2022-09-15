import React, { useState } from 'react';
import authBG from "../../assets/bg.png"
import logoApp from "../../assets/logo_transparent.png"
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { register } from './authSlice'
export interface RegisterProps {
}

export function Register(props: RegisterProps) {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    phoneNumber: '',
    dateOfBirth: moment().format('YYYY-MM-DD'),
    email: '',
    password: '',
    repeatedPassword: ''
  });
  const handleSubmit = () => {
    if (form.password && form.repeatedPassword
      && form.firstName && form.lastName
      && form.gender && form.email
      && form.dateOfBirth && form.phoneNumber
    ) {
      if (form.password !== form.repeatedPassword) {
        toast.error('Repeat Password not match!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        const payload = { ...form };
        delete payload.repeatedPassword;
        dispatch(register(payload))
      }
    } else {
      toast.info('Type your infomation', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <div className="flex flex-row w-screen h-screen">
      <button className="absolute top-2 left-2 font-semibold
        flex flex-row items-center text-2xl text-blue-500
        cursor-pointer
        "
        onClick={() => navigate('/login')}
      >
        <FontAwesomeIcon icon={faLeftLong}
          className="text-blue-500 text-4xl mr-2"
        />Login
      </button>
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
              <input placeholder="First name" type="text" className="grow 
                placeholder-slate-500 form-input px-3 py-3 rounded-xl invalid:ring-red-500
                bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl "
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              ></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Last Name</span>
              <input placeholder="First name" type="text" className="grow 
              placeholder-slate-500 form-input px-3 py-3 rounded-xl invalid:ring-red-500
              bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              ></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Gender</span>
              <select name="gender" id="gender" className="grow placeholder-slate-500 form-input 
                px-3 py-3 rounded-xl bg-slate-300 border-none shadow-md 
                caret-gray-500 text-gray-700 text-xl invalid:ring-red-500"
                value={form.gender}
                onChange={(e) => setForm({ ...form, gender: e.target.value })}
              >
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
              <input placeholder="Date of birth" type="date"
                className="grow placeholder-slate-500 form-input px-3 py-3 invalid:ring-red-500
                  rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 
                  text-gray-700 text-xl"
                value={form.dateOfBirth}
                onChange={(e) => setForm({ ...form, dateOfBirth: e.target.value })}
              ></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Email</span>
              <input placeholder="Your email" type="email"
                className="grow placeholder-slate-500 form-input px-3 py-3 invalid:ring-red-500
                rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              ></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate ">Phone Number</span>
              <input placeholder="Your phone number" type="text"
                className="grow placeholder-slate-500 form-input px-3 py-3 invalid:ring-red-500
                rounded-xl bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"
                value={form.phoneNumber}
                onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
              ></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate">Password</span>
              <input placeholder="Your password" type="password"
                className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl invalid:ring-red-500
                bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              ></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-600 font-semibold text-xl mr-2 basis-1/5 lg:invisible truncate">Repeat</span>
              <input placeholder="Repeat your password" type="password"
                className="grow placeholder-slate-500 form-input px-3 py-3 rounded-xl invalid:ring-red-500
                bg-slate-300 border-none shadow-md caret-gray-500 text-gray-700 text-xl"
                value={form.repeatedPassword}
                onChange={(e) => setForm({ ...form, repeatedPassword: e.target.value })}
              ></input>
            </div>
          </div>
          <div className=" w-full mt-10">
            <button className="btn-primary w-full py-3 text-xl"
              onClick={handleSubmit}
            >Register</button>
          </div>
        </div>
        <span className="mb-10 text-xl text-gray-700">
        </span>
      </div>
    </div>
  );
}
