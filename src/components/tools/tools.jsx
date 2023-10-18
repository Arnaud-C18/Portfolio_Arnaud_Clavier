import { React, useEffect, useRef} from 'react';
import './tools.sass';

export default function Tools() {

  const toolsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        console.log(document.querySelectorAll(".tool"))
        document.querySelectorAll(".tool").forEach.classList.add("toolsActive");
        observer.unobserve(toolsRef.current)
      }
    })
    observer.observe(toolsRef.current);//test

  }, [])

  return (
    <div className='tools' ref={toolsRef}>
      <h2 className='toolsTitle'>Outils utilisés</h2>
      <ul>
        <li className='tool 1'>VScode</li>
        <li className='tool 2'>Git</li>
        <li className='tool 3'>Github</li>
        <li className='tool 4'>Figma</li>
        <li className='tool 5'>Npm</li>
        <li className='tool 6'>Yarn</li>
        <li className='tool 7'>ThunderClient</li>
        <li className='tool 8'>ChatGPT</li>
      </ul>
    </div>
  );
};