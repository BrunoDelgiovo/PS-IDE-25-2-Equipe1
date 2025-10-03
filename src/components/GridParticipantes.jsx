import React, { useState } from 'react';
import './GridParticipantes.css';

import kamilePimentel from '../images/Integrantes/Kamille Pimentel.png';
import luanaHahn from '../images/Integrantes/Luana Hahn.png';
import kathleenHoff from '../images/Integrantes/Kathleen Hoff (Kath).png';
import thaisMarcelle from '../images/Integrantes/Thais Marcelle Dihl.png';
import lumaBeserra from '../images/Integrantes/Luma Beserra.png';
import milenaSilva from '../images/Integrantes/Mile Silva.png';
import ingridMurielem from '../images/Integrantes/Ingrid Murielem Sebastiana.png';
import julianneMartins from '../images/Integrantes/Juh Martins.png';
import julianaSchmitt from '../images/Integrantes/Juliana Schmitt Henrique.png';
import mariaFlavia from '../images/Integrantes/Maria Flávia Borrajo Tondo.png';
import joanaCampos from '../images/Integrantes/Joana Campos.png';
import giseleRotta from '../images/Integrantes/Gisele Rotta.png';
import lauraGrippa from '../images/Integrantes/Laura Grippa.png';
import lisaManami from '../images/Integrantes/Lissa Manami Adate.png';
import brunaSchmidt from '../images/Integrantes/Bruna Schmidt.png';
import sofiaPopsin from '../images/Integrantes/Sofia Popsin.png';
import elisaCristini from '../images/Integrantes/Elisa Cristini.png';
import jadeHatanaka from '../images/Integrantes/Jade Hatanaka.png';
import leticiaMachado from '../images/Integrantes/Leticia Machado.png';
import isisBurmeister from '../images/Integrantes/Isis Burmeister Pericolo.png';
import marianaKaori from '../images/Integrantes/Mari Aso.png';
import lauraKeidann from '../images/Integrantes/Laura Keidann.png';

const participantes = [
    { id: 1, nome: 'Kamile Pimentel', curso: 'Ciência da Computação', ingresso: '2022/1', foto: kamilePimentel },
    { id: 2, nome: 'Luana Hahn', curso: 'Ciência da Computação', ingresso: '2021/1', foto: luanaHahn },
    { id: 3, nome: 'Kathleen Hoff (Kathi)', curso: 'Ciência da Computação', ingresso: '2020/2', foto: kathleenHoff },
    { id: 4, nome: 'Thais Marcelle (Marti)', curso: 'Engenharia da Computação', ingresso: '2022/1', foto: thaisMarcelle },
    { id: 5, nome: 'Luma Beserra', curso: 'Ciência da Computação', foto: lumaBeserra },
    { id: 6, nome: 'Milena Silva Braga', curso: 'Ciência da Computação', ingresso: '2019/2', foto: milenaSilva },
    { id: 7, nome: 'Ingrid Murielem', curso: 'Ciência da Computação', foto: ingridMurielem },
    { id: 8, nome: 'Julianne Emanuelle Martins', curso: 'Ciência da Computação', ingresso: '2022/1', foto: julianneMartins },
    { id: 9, nome: 'Juliana Schmitt', curso: 'Ciência da Computação', foto: julianaSchmitt },
    { id: 10, nome: 'Maria Flávia Borrajo Tondo', curso: 'Mestrado', ingresso: '2023/2', foto: mariaFlavia },
    { id: 11, nome: 'Joana Campos', curso: 'Ciência da Computação', ingresso: '2021/1', foto: joanaCampos },
    { id: 12, nome: 'Gisele Rotta', curso: 'Ciência da Computação', ingresso: '2023/1', foto: giseleRotta },
    { id: 13, nome: 'Laura Grippa', curso: 'Ciência da Computação', ingresso: '2018/1', foto: lauraGrippa },
    { id: 14, nome: 'Lisa Manami Adate', curso: 'Ciência da Computação', ingresso: '2023/2', foto: lisaManami },
    { id: 15, nome: 'Bruna Schmidt', curso: 'Engenharia da Computação', ingresso: '2023/1', foto: brunaSchmidt },
    { id: 16, nome: 'Sofia Popsin Gomes', curso: 'Engenharia da Computação', ingresso: '2019/2', foto: sofiaPopsin },
    { id: 17, nome: 'Elisa Cristini', curso: 'Ciência da Computação', ingresso: '2023/2', foto: elisaCristini },
    { id: 18, nome: 'Jade Hatanaka', curso: 'Ciência da Computação', ingresso: '2021/1', foto: jadeHatanaka },
    { id: 19, nome: 'Leticia Santos Machado', curso: 'Ciência da Computação', foto: leticiaMachado },
    { id: 20, nome: 'Isis Burmeister Pericolo', curso: 'Ciência da Computação', ingresso: '2018/1', foto: isisBurmeister },
    { id: 21, nome: 'Mariana Kaori', curso: 'Engenharia da Computação', ingresso: '2020/1', foto: marianaKaori },
    { id: 22, nome: 'Laura Keidann', curso: 'Ciência da Computação', foto: lauraKeidann },
]

const GridParticipantes = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const participantesPerPage = 4;
    const totalPages = Math.ceil(participantes.length / participantesPerPage);

    const goToPreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const goToNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    const startIndex = currentPage * participantesPerPage;
    const currentParticipants = participantes.slice(startIndex, startIndex + participantesPerPage);
    return (
        <div className='window-container'>
            <div className='window-header'>
                <h2 class='window-header__title'>INTEGRANTES</h2>
            </div>
            <div className='participantes-container'>
                <div className='participantes-grid'>
                    {currentParticipants.map((participant) => (
                        <div key={participant.id} className='participante-card'>
                            <img src={participant.foto}
                                alt={`Foto de ${participant.name}`}
                                className='participante-card__image' />
                            <div className='participante-card__body'>
                                <div>
                                    <h3 className='participante-card__nome'>{participant.nome}</h3>
                                    <p className='participante-card__curso'>{participant.curso}</p>
                                </div>
                                {participant.ingresso ? (
                                    <p className="participante-card__year">
                                        Ingresso na faculdade: {participant.ingresso}
                                    </p>
                                ) : (
                                    <div className="participante-card__year--placeholder"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>


                <div className="participants-controls">
                    <button
                        onClick={goToPreviousPage}
                        aria-label="Página anterior"
                        className={`participants-controls__arrow ${currentPage === 0 ? 'participants-controls__arrow--disabled' : ''}`}
                        disabled={currentPage === 0}
                    >
                        &#9650; {/* Seta para cima */}
                    </button>
                    
                     <div 
                        className="participants-controls__track"
                        style={{
                            '--current-page': currentPage,
                            '--total-pages': totalPages
                        }}
                    >
                        <div className="participants-controls__thumb"></div>
                    </div>
                    
                    <button
                        onClick={goToNextPage}
                        aria-label="Próxima página"
                        className={`participants-controls__arrow ${currentPage === totalPages - 1 ? 'participants-controls__arrow--disabled' : ''}`}
                        disabled={currentPage === totalPages - 1}
                    >
                        &#9660; {/* Seta para baixo */}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default GridParticipantes;