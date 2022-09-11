import React from 'react';
import Footer from '../organisms/Footer';
import Navbar from '../organisms/Navbar';
import { useRouter } from 'next/router';

function Layout({ children }: any) {
  const router = useRouter();

  return (
    <>
      {router.pathname !== '/movie/[id]' && <Navbar />}
      {children}
      <Footer />
    </>
  );
}

export default Layout;
