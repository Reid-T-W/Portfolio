import { BrowserRouter } from "react-router-dom"

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech,
// Works, StarCanvas } from "./components";
import { About,  Contact, Experience, Education, Feedbacks, 
Hero, Navbar, Tech, Project, Blog, StarsCanvas } from "./components";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
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
