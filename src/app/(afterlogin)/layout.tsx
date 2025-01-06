import React, { ReactNode } from 'react';
import BottomNavbar from '@/app/(afterlogin)/_component/BottomNavbar';

interface AfterLoginLayoutProps {
  children: ReactNode;
}

const AfterLoginLayout: React.FC<AfterLoginLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        {children}
      </main>
      <BottomNavbar />
    </div>
  )
}

export default AfterLoginLayout;
