import React from 'react';
import { Header, Footer, SideBar } from '../common';
export interface MainLayoutProps {
  children?: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      <div>
        <SideBar></SideBar>
        <div>{children}</div>
        <button className="btn-primary">
          Save changes
        </button>
        <div className="box-border p-1 bg-slate-700 w-10 h-10 hover:box-content">

        </div>
      </div>
      <Footer />
    </div>
  );
}
