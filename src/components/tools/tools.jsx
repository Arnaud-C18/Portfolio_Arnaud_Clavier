import { React, useEffect, useRef } from 'react';
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
};