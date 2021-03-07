import React from 'react';
import Footer from '../src/components/common/Footer';
import Menu from '../src/components/common/Menu';
import Capa from '../src/components/common/Capa';
import Project from '../src/components/common/Project';

export default function Home() {
  return (
    <>
      <Capa />
      <Menu />
      <Project />
      <Footer />
    </>
  );
}
