import React from 'react';
import { Header, Footer, SideBar } from '../common';
export interface AuthLayoutProps {
  children?: React.ReactNode
}

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="w-100 h-100 flex">
      {children}
    </div>
  );
}
