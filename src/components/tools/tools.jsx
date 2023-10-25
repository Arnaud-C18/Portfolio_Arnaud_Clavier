/*import { React, useEffect, useRef } from 'react';
import './tools.sass';
import tools from "../../assets/data/tools.json"

export default function Tools() {

  return (
    <div className='tools'>
      <h2 className='toolsTitle'>Outils utilisés</h2>
        <ul>
          {tools.map((tool, index) => (
            <li className='li' key={tool.id}>{tool.name}</li>
          ))}
        </ul>
    </div>
  );
};*/

/*
.tile 
  animation: .9s ease-in-out  fade-in



@for $i from 1 through 12 
  .tile 
    &:nth-child(#{$i}) 
      animation-delay: $i * (.08s)
    

@keyframes fade-in 
  0% 
    opacity: 0
    transform: scale(0)
  
  
  100% 
    opacity: 1
    transform: scale(1)
*/

import { React, useEffect, useRef } from 'react';
import './tools.sass';
import tools from "../../assets/data/tools.json"

export default function Tools() {

  const toolsRefs = tools.map(() => useRef());

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("tile");
                    observer.unobserve(entry.target);
                }
            });
        });

        toolsRefs.forEach(ref => {
            observer.observe(ref.current);
        });

    }, []);

  return (
    <div className='tools'>
      <h2 className='toolsTitle'>Outils utilisés</h2>
      <ul>
        {tools.map((tool, index) => (
          <li ref={toolsRefs[index]} key={tool.id}>{tool.name}</li>
        ))}
      </ul>
    </div>
  );
};

