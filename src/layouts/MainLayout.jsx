import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = ({ categories }) => {
  return (
    <div className="flex flex-col">
      <Navbar categories={categories} />
      <main className="flex-1">
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
