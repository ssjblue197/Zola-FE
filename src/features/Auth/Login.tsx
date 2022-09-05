import * as React from 'react';
import { faUser, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export interface LoginProps {
}

export function Login (props: LoginProps) {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="basis-1/2 bg-slate-200 bg-scroll bg-[url('../../assets/bg.png')]">
        <img
          className="w-full object-cover"
          src="../../assets/bg.png"
        />
      </div>
      <div className="basis-1/2 justify-center place-items-center flex bg-slate-200">
        <div className="flex flex-col justify-center items-center">
          <div className="w-40 h-40 rounded-full bg-slate-400 flex justify-center items-center mb-10 shadow-xl ring-4">
            <FontAwesomeIcon icon={faUser} 
              size="4x"
              className=""
              inverse
            />
          </div>
          <div className="w-full px-10">
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-800 font-semibold text-lg mr-2 basis-1/5">Email</span>
              <input placeholder="Your email" type="email" className="grow placeholder-slate-300 form-input px-3 py-3 rounded-xl bg-slate-500 border-none shadow-md caret-white text-gray-200"></input>
            </div>
            <div className="w-full mt-4 flex flex-row justify-between items-center">
              <span className="text-gray-800 font-semibold text-lg mr-2 basis-1/5">Password</span>
              <input placeholder="Your password" type="password" className="grow placeholder-slate-300 form-input px-3 py-3 rounded-xl bg-slate-500 border-none shadow-md caret-white text-gray-200"></input>
            </div>
          </div>
          <div className="w-full px-10 mt-10 flex flex-row justify-between">
            <div>
              <input
                type="checkbox"
                className="cursor-pointer border-none outline-none"
              />
              <span className="text-gray-800 font-light text-md ml-2">
                Remember
              </span>
            </div>
            <div>
              <span className="text-gray-800 font-semibold text-md mx-2 cursor-pointer">
                Forgot Password
              </span>
              <FontAwesomeIcon icon={faQuestion}
                inverse
              />
            </div>
          </div>
          <div className="w-full px-10 mt-10 flex flex-row justify-between">
            <button className="w-32 btn-warning">Register</button>
            <div>
              <button className="btn-danger mr-2">
                <FontAwesomeIcon icon={faGoogle} 
                  size="2x"
                  className=""
                  inverse
                />
              </button>
              <button className="btn-primary">
                <FontAwesomeIcon icon={faFacebook} 
                  size="2x"
                  className=""
                  inverse
                />
              </button>
            </div>
            <button className="w-32 btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}
