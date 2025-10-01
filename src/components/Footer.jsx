import React from 'react';
import instagramLogo from '../images/InstagramLogo.png';
import linkedinLogo from '../images/LinkedinLogo.png';
import ideLogo from '../images/IdeLogo.png';

export default function Footer() {
    return (
        <footer className="main-footer">
            <a href="https://www.instagram.com/program.ada.ufrgs/" target="_blank" rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram"/>
            </a>
            <a href="https://www.linkedin.com/company/program-ada-ufrgs/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="Linkedin"/>
            </a>
            <a href="https://www.instagram.com/ide_jr/" target="_blank" rel="noopener noreferrer">
            <img src={ideLogo} alt='IDE'/>
            </a>
        </footer>
    );
}