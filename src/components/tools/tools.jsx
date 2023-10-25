import { React, useEffect, useRef } from 'react';
import './tools.sass';
import tools from "../../../public/assets/data/tools.json"

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

