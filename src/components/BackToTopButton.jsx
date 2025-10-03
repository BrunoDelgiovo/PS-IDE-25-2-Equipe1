// Em src/components/BackToTopButton.jsx

import React, { useState, useEffect } from 'react';

export default function BackToTopButton() {
    // 1. Estado para controlar a visibilidade do botão
    const [isVisible, setIsVisible] = useState(false);

    // 2. Função que verifica a posição do scroll
    const toggleVisibility = () => {
        // Se o scroll vertical for maior que 300 pixels, mostra o botão
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // 3. Função para rolar a página suavemente para o topo
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rola suavemente
        });
    };

    // 4. Efeito para adicionar e remover o 'event listener' do scroll
    useEffect(() => {
        // Adiciona um ouvinte de evento quando o componente é montado
        window.addEventListener('scroll', toggleVisibility);

        // Remove o ouvinte de evento quando o componente é desmontado
        // Isso é importante para evitar vazamentos de memória
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        // 5. Renderiza o botão apenas se 'isVisible' for verdadeiro
        <div className="back-to-top-container">
            {isVisible && (
                <button onClick={scrollToTop} className="back-to-top-button">
                    {/* Ícone de seta para cima (SVG) */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            )}
        </div>
    );
}