import { BrowserRouter } from "react-router-dom"

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech,
// Works, StarCanvas } from "./components";
import { About,  Contact, Experience, Education, Feedbacks, 
Hero, Navbar, Tech, Project, Blog, StarsCanvas } from "./components";
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="relative z-0 bg-primary">
        {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> */}
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <Project />
        <Blog />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <Analytics />
    </BrowserRouter>
  )
}

export default App
