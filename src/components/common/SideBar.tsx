import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU_SIDEBAR } from '../../utils/menuSidebar'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { logout, selectAuthState } from '@/features/Auth/authSlice';
import { getRefreshToken } from '@/utils/auth';
import logoApp from '../../assets/logo_transparent.png';
export interface SideBarProps {
}

export function SideBar(props: SideBarProps) {
  const AuthState = useAppSelector(selectAuthState)
  useEffect(() => {
    if (!AuthState.isLoggedIn) {
      navigate('/login')
    }
  }, [AuthState.isLoggedIn])
  const dispatch = useAppDispatch()
  const [menuActive, setMenuActive] = useState(MENU_SIDEBAR[0])
  const navigate = useNavigate()
  const navigateToItem = (item: any) => {
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
    <div className="h-screen w-20 bg-white shadow-xl shadow-slate-500 flex-col flex justify-start items-center place-content-center place-items-center">

      <div className="rounded-full w-14 h-14 bg-slate-200 mt-4 shadow-2xl ring-2 ring-blue-200">
        <img src={logoApp} alt="Logo" />
      </div>

      {
        MENU_SIDEBAR.map((item, index) => {
          if (item.icon) {
            return (
              <button
                onClick={() => navigateToItem(item)}
                key={index} className="hover:bg-blue-200 shadow-md rounded-full p-2 m-3 w-12 h-12"
              >
                <FontAwesomeIcon icon={item.icon}
                  className={menuActive.name === item.name ? 'text-sky-500' : 'text-slate-400'}
                  size="1x"
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
