import React, { useState } from "react";
import "./Carousel.css";

function Carousel() {
  const pages = [
    {
      title: "Portas Abertas 2025",
      content:
        'Uma oficina de programação em Portugol para o evento "Portas Abertas".\n\nO grupo preparou uma apresentação sobre sua história e conduziu sessões de 30 minutos com os participantes,que tiveram uma boa adesão.',
      image: "src/images/PortasAbertas.png",
    },
    {
      title: "Torneio Feminino de Programação",
      content:
        "Uma colaboração com o Laboratório de Programação Competitiva (LPC).\n\nAs atividades envolveram o auxílio na organização do torneio, monitoria das participantes durante a prova e a confecção de materiais de divulgação (artes e slides).",
    },
    {
      title: "Cofferência - Roda de Conversa",
      content:
        "Um evento para divulgar o projeto Program.Ada para outras mulheres da instituição.\n\nO grupo apresentou seu papel na comunidade e como o projeto foi criado.",
      image: "src/images/Cofferencia.png",
    },
    {
      title: "Ação nas Enchentes",
      content:
        "Uma iniciativa de voluntariado para ajudar vítimas das enchentes.\n\nO projeto envolveu a arrecadação de fundos, a compra e distribuição de itens de higiene, roupas e alimentos para animais, além da organização de notas e formulários para prestação de contas.",
      image: "",
    },
    {
      title: "Carpool",
      content:
        "Um projeto de caronas solidárias, criado em resposta às enchentes.\n\nO grupo organizou formulários e grupos para conectar colegas que precisavam de transporte para o campus.",
      image: "",
    },
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="carousel-container">
      <div className="carousel-content">
        {pages[currentPage].image && (
          <div className="carousel-image-container">
            <img
              src={pages[currentPage].image}
              alt={`Image for ${pages[currentPage].title.substring(0, 20)}`}
              className="carousel-image"
            />
          </div>
        )}
        <div className="carousel-text-container">
          <h3 className="carousel-text">{pages[currentPage].title} </h3>
          <p className="carousel-text" style={{ whiteSpace: "pre-line" }}>
            {pages[currentPage].content}
          </p>
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-arrow carousel-prev"
          onClick={goToPrevious}
          aria-label="Previous page"
        >
          &larr;
        </button>

        <div className="carousel-scrollbar">
          <div
            className="carousel-scrollbar-thumb"
            style={{
              width: `${100 / pages.length}%`,
              left: `${(currentPage / pages.length) * 100}%`,
            }}
          ></div>
        </div>

        <button
          className="carousel-arrow carousel-next"
          onClick={goToNext}
          aria-label="Next page"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default Carousel;
