import * as React from 'react';
import { apiService } from '../../services/apiService';
const Authenication = apiService.get('auth');

export interface NotFoundProps {
}

export function NotFound (props: NotFoundProps) {
  const data = {
    email: 'ssjblue197x@gmail.com',
    password: 'ssjblue@197'
  }
  const handleClick = async () => {
    const res = await Authenication.post(data)
    console.log(res);
  }

  return (
    <div>
      Not Found
      <button className="btn-success"
        onClick={handleClick}
      >
        Click
      </button>
    </div>
  );
}
