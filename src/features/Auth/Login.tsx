import * as React from 'react';
import { faUser, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export interface LoginProps {
}

export function Login (props: LoginProps) {
  return (
    <div className="absolute flex flex-col justify-center items-center rounded-lg bg-slate-600 w-[500px] h-[600px] right-40 top-40 shadow-xl">
      <div className="absolute w-40 h-40 rounded-full bg-slate-400 flex justify-center items-center -top-20 shadow-xl ring-4">
        <FontAwesomeIcon icon={faUser} 
          size="4x"
          className=""
          inverse
        />
      </div>
      <div className="w-full px-10">
        <div className="w-full mt-4 flex flex-row justify-between items-center">
          <span className="text-gray-300 font-semibold text-lg mr-2 basis-1/5">Email</span>
          <input placeholder="Your email" type="email" className="grow placeholder-slate-300 form-input px-3 py-3 rounded-xl bg-slate-500 border-none shadow-md caret-white text-gray-200"></input>
        </div>
        <div className="w-full mt-4 flex flex-row justify-between items-center">
          <span className="text-gray-300 font-semibold text-lg mr-2 basis-1/5">Password</span>
          <input placeholder="Your password" type="password" className="grow placeholder-slate-300 form-input px-3 py-3 rounded-xl bg-slate-500 border-none shadow-md caret-white text-gray-200"></input>
        </div>
      </div>
      <div className="w-full px-10 mt-10 flex flex-row justify-between">
        <div>
          <input
            type="checkbox"
            className="cursor-pointer border-none outline-none"
          />
          <span className="text-gray-300 font-light text-md ml-2">
            Remember
          </span>
        </div>
        <div>
          <span className="text-gray-300 font-semibold text-md mx-2 cursor-pointer">
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
  );
}
