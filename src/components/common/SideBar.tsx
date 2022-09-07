import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU_SIDEBAR } from '../../utils/menuSidebar'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { logout, selectAuthState } from '@/features/Auth/authSlice';
import { getRefreshToken } from '@/utils/auth';
export interface SideBarProps {
}

export function SideBar(props: SideBarProps) {
  const AuthState = useAppSelector(selectAuthState)
  useEffect(() => {
    console.log(AuthState);
    if (!AuthState.isLoggedIn) {
      navigate('/login')
    }
  }, [AuthState.isLoggedIn])
  const dispatch = useAppDispatch()
  const [menuActive, setMenuActive] = useState(MENU_SIDEBAR[0])
  const navigate = useNavigate()
  const navigateToItem = (item:any) => {
    if (item.url) {
      setMenuActive(item)
      if (item.url !== '/logout') {
        navigate(item.url)
      } else {
        const payload = {
          refreshToken: getRefreshToken()
        }
        dispatch(logout(payload))
      }
    }
  }

  return (
    <div className="h-screen w-20 bg-slate-400 shadow-xl shadow-slate-700 flex-col flex justify-start items-center place-content-center place-items-center">
      {
        MENU_SIDEBAR.map((item, index) => {
          if (item.icon) {
            return (
              <button
                onClick={() => navigateToItem(item)}
                key={index} className="hover:bg-blue-500 rounded-full p-2 m-4">
                <FontAwesomeIcon icon={item.icon}
                  className="slate-300"
                  size="2x"
                  inverse={menuActive.name === item.name}
                />
              </button>
            )
          }
          return (
            <div className="flex-1"></div>
          )
        })
      }
    </div>
  );
}
