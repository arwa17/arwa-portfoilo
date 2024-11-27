// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import MyWork from './components/MyWork/MyWork';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
