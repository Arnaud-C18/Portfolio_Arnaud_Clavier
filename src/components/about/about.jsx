import {React, useEffect, useRef} from 'react';
import './about.sass';
import portrait from "../../assets/images/portrait.webp"


export default function About() {

  const imageRef = useRef();
  const textRef = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      imageRef.current.classList.add("imgActive");
    }, 400);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      textRef.current.classList.add("textActive");
    }, 600);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='about' id='about'>
      <img src={portrait} ref={imageRef}/>
      <p ref={textRef}>
        &#9995;<br />
        Salut, moi c'est Arnaud, développeur web et passioné d'UX et d'UI.<br />
        Avide de savoir en tout genre, j'aime manipuler de nouvelles technologies et expérimenter dans mes travaux.
      </p>
    </div>
  );
};