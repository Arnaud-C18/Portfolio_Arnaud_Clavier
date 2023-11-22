import React from 'react';
import './contact.sass';

export default function Navbar() {
    return (
        <div className='contact' id='contact'>
            <p className='if'>Si vous souhaitez me contacter pour discuter d'un projet ou pour me poser des questions</p>
            <a href="mailto:dev@arnaud-c18.com">
                <p>Cliquez ici</p>
                <i className="fa-regular fa-envelope"></i>
            </a>
            <p className='or'>Ou envoyez un mail à : dev@arnaud-c18.com</p>
        </div>
    );
};