import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ children, categories }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar categories={categories} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
