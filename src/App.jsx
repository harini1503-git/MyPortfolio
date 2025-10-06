import React from 'react';
import About from './About/About';
import Experience from './Experience/Experience';
import Footer from './Footer/Footer';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import Navbar from './NavBar/NavBar';
import Education from './Education/Education';
import './App.css'
import BlurBlob from './BlurBlob';

function App() {

  return (
    <div className='bg-[#050414]'>
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
          <Navbar />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Footer />
      </div>
    </div>
  )
}

export default App;
