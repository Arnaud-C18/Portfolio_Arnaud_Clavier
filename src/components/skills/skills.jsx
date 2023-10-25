import { React, useEffect, useRef } from 'react';
import './skills.sass';
import skills from "../../../public/assets/data/skills.json"

export default function Skills() {
    const skillsRefs = skills.map(() => useRef());

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("skillsActive");
                    observer.unobserve(entry.target);
                }
            });
        });

        skillsRefs.forEach(ref => {
            observer.observe(ref.current);
        });

    }, []);

    return (
        <div className='skills'>
            <h2 className='skillsTitle'>Mes compétences</h2>
            <div className='skillsBar'>
                {skills.map((skill, index) => (
                    <div className='skill' key={skill.id}>
                        <div className='bar' ref={skillsRefs[index]}>
                            <div className="level" style={{ height: skill.level, backgroundColor: skill.color }}>
                                <p>{skill.level}</p>
                            </div>
                        </div>
                        <div className='logo' style={{ borderColor: skill.color }}>
                            <i className={skill.logo} style={{ color: skill.color }}></i>
                        </div>
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};