import { React, useEffect, useRef} from 'react';
import './skillBar.sass';

export default function Skill(props) {

    const skillsRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                skillsRef.current.classList.add("skillsActive");
                observer.unobserve(skillsRef.current)
            }
        })
        observer.observe(skillsRef.current);

    }, [])

    const { tech, techLogo, level, color } = props;

    return (
        <div className='skill'>
            <div className='skillBar' ref={skillsRef}>
                <div className="skillLevel" style={{ height: level, backgroundColor: color }}>
                    <p>{level}</p>
                </div>
            </div>
            <div className='skillLogo' style={{ borderColor: color }}>
                <i className={techLogo} style={{ color: color }}></i>
            </div>
            <p>{tech}</p>
        </div>
    );
};