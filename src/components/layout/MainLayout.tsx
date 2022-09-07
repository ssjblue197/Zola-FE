import React from 'react';
import { Header, Footer, SideBar } from '../common';
export interface MainLayoutProps {
  children?: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  
  return (
    <div>
      {/* <Header /> */}
      <div className="w-screen h-screen flex bg-slate-200">
        <SideBar></SideBar>
        <div>{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
