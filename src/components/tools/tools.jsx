import { React, useEffect, useRef } from 'react';
import './tools.sass';
import tools from "../../assets/data/tools.json"

export default function Tools() {

  /*const toolsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log(document.querySelectorAll(".tool"))
        document.querySelectorAll(".tool").forEach.classList.add("toolsActive");
        observer.unobserve(toolsRef.current)
      }
    })
    observer.observe(toolsRef.current);

  }, [])*/

  return (
    <div className='tools'>
      <h2 className='toolsTitle'>Outils utilisés</h2>
      <ul>
        {tools.map((tool, index) => (
          <li key={tool.id} /*ref={skillsRefs[index]}*/>{tool.name}</li>
        ))}
      </ul>
    </div>
  );
};