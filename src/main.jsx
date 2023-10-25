import React from 'react'
import ReactDOM from 'react-dom/client'
import "./main.sass"
import Navbar from "./components/navbar/navbar.jsx"
import About from "./components/about/about.jsx"
import Skills from "./components/skills/skills.jsx"
import Tools from "./components/tools/tools.jsx"
import Projects from "./components/projects/projects.jsx"
import Contact from "./components/contact/contact.jsx"
import Footer from "./components/footer/footer.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <nav>
      <Navbar />
    </nav>
    <main>
      <About />
      <div className='skillsAndTools' id='skills'>
        <Skills />
        <Tools />
      </div>
      <Projects />
      <Contact />
    </main>
    <footer>
      <Footer />
    </footer>
  </React.StrictMode>,
)
