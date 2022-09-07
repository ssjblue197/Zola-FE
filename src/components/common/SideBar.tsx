import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MENU_SIDEBAR } from '../../utils/menuSidebar'
import { useNavigate } from 'react-router-dom';
export interface SideBarProps {
}

export function SideBar(props: SideBarProps) {
  const navigate = useNavigate()
  const navigateToItem = (item){
    if (item.url) {
      navigate(item.url)
    }
  }

  return (
    <div className="h-screen w-20 bg-slate-300 shadow-2xl flex-col flex justify-start items-center place-content-center place-items-center">
      {
        MENU_SIDEBAR.map((item, index) => {
          return (
            <button
              onClick={navigateToItem(item)}
              key={index} className="hover:bg-blue-500 rounded-full p-2 m-4">
              <FontAwesomeIcon icon={item.icon}
                className="slate-300"
                size="2x"
                style={{ color: '#565662' }}
              />
            </button>
          )
        })
      }
    </div>
  );
}
