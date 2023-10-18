import React from 'react';
import './skillsList.sass';
import Skill from "../skillBar/skillBar.jsx"

export default function Skills() {

    return (
        <div className='skills' id='skills'>
            <h2 className='skillsTitle'>Mes compétences</h2>
            <div className="skillsBar">
                <Skill tech="HTML" techLogo="fa-brands fa-html5" level="95%" color="#F16324" />
                <Skill tech="CSS" techLogo="fa-brands fa-css3-alt" level="95%" color="#2465F1" />
                <Skill tech="Sass" techLogo="fa-brands fa-sass" level="90%" color="#CE679A" />
                <Skill tech="JS" techLogo="fa-brands fa-square-js" level="80%" color="#E4A126" />
                <Skill tech="React" techLogo="fa-brands fa-react" level="80%" color="#61DBFB" />
            </div>
        </div>
    );
};