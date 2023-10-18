import React, { useState } from 'react';
import './projects.sass';
import data from '../../assets/data/data.json';

export default function ProjectsList() {

  const [modal, setModal] = useState(false);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='projectsDiv' id='projects'>
      <h2 className='projectsTitle'>Mes projets</h2>
      <div className='projectsList'>
        {data.map((project) => (
          <div key={project.id} className='projectCard' onClick={()=>setModal(project)}>
            <img src={project.image} alt={project.title} />
            <div className='projectInfo'>
              <h3>{project.title}</h3>
              <p>{project.shortDescription}</p>
            </div>
          </div>
        ))}
        {
          modal && (
          <div className='modalBackground' onClick={()=>setModal(false)}>
            <div className='modal' onClick={stopPropagation} style={{ backgroundImage: `url(${modal.image})` }}>
              <i className="fa-solid fa-xmark" onClick={()=>setModal(false)}></i>
              {/*<img src={modal.image} alt={modal.title} />*/}
              <div className='modalInfo'>
                <p className='modalTitle'>{modal.title}</p>
                <p className='modalDescription'>{modal.longDescription}</p>
                <div className='links'>
                  <a className='pageLink' href={modal.pageLink} target="_blank" rel="noopener noreferrer">Lien vers le site <i className="fa-solid fa-pager"></i></a>
                  <a className='codeLink'href={modal.codeLink} target="_blank" rel="noopener noreferrer">Lien vers le code <i className="fa-brands fa-github"></i></a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};