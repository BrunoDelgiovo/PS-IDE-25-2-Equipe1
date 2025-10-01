import React, { useState } from 'react';

const navLinks = [
    { href: '#QuemSomos', text: 'Quem somos nós?' },
    { href: '#NossosObjetivos', text: 'Nossos objetivos' },
    { href: '#Projetos', text: 'Projetos' },
    { href: '#MeninasDigitais', text: 'Meninas Digitais' },
    { href: '#Integrantes', text: 'Integrantes' },
    { href: '#ContateNos', text: 'Contate-nos' },
];

export default function Navbar() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    
    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="main-nav">
            <div className="nav-container">
                <div className="nav-content">
                    <div className="desktop-menu">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="nav-link">
                                {link.text}
                            </a>
                        ))}
                    </div>

                    <div className="mobile-menu-button-container">
                        <button id="mobile-menu-button" className="mobile-menu-button" onClick={toggleMobileMenu}>
                            <span className="sr-only">Abrir menu principal</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div id="mobile-menu" className={`mobile-menu ${isMobileMenuOpen ? '' : 'hidden'}`}>
                {navLinks.map((link) => (
                     <a key={link.href} href={link.href} className="mobile-menu-link" onClick={closeMobileMenu}>
                        {link.text}
                    </a>
                ))}
            </div>
        </nav>
    );
}