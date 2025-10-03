import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import BackToTopButton from "./components/BackToTopButton";
import Contact from "./components/Contact";
import GridParticipantes from "./components/GridParticipantes";

import "./App.css";

import logoImage from "./images/Program_Ada.png";

function App() {
  return (
    <>
      <div className="background-wrap">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
      </div>

      <Navbar />
      <section id="Logo" className="logo-section">
        <img src={logoImage} alt="Logo do Program.Ada" className="logo-image" />
      </section>

      <main className="page-container main-content">
        <Section id="QuemSomos" title="Quem somos nós?">
          <p>
            O Program.Ada nasceu no Instituto de Informática em 2017, quando um
            grupo de alunas se uniu para enfrentar situações de assédio vividas
            na universidade. Dessa iniciativa, surgiram a Comissão de
            Relacionamentos do INF e o Coletivo de Mulheres na Computação.
          </p>
          <p>
            No começo, o coletivo ainda não possuía um nome. Com o tempo,
            percebemos a importância de celebrar a trajetória de Ada Lovelace,
            considerada a primeira programadora da história, e assim surgiu o
            Program.Ada.
          </p>
          <p>
            Desde então, realizamos rodas de conversa, cine-debates, oficinas e
            eventos que fortalecem o protagonismo das mulheres na tecnologia e
            promovem reflexões sobre gênero e inclusão na comunidade acadêmica e
            além dela.
          </p>
          <p>
            Em 2023, o coletivo deu um passo marcante ao se tornar também um
            projeto de extensão universitária, ampliando seu alcance e o impacto
            de suas ações na sociedade.
          </p>
        </Section>

        <Section id="NossosObjetivos" title="Nossos Objetivos">
          <ul className="list">
            <li>
              Construir um espaço seguro e acolhedor, onde mulheres possam
              compartilhar experiências, trocar ideias e dialogar sobre temas em
              comum.
            </li>
            <li>
              Apoiar a inserção de mulheres no mercado de tecnologia, oferecendo
              desde oportunidades de networking até suporte na elaboração de
              currículos e trajetórias profissionais.
            </li>
            <li>
              Promover atividades e eventos para a comunidade, ampliando as
              discussões sobre a presença das mulheres na tecnologia e sua
              atuação no mercado de trabalho.
            </li>
            <li>
              Transformar o INF em um ambiente mais inclusivo e amigável para
              mulheres, incentivando o respeito, à diversidade e a equidade de
              gênero.
            </li>
          </ul>
        </Section>

        <div id="Projetos" className="window-container">
          <div className="window-header">
            <h2 className="window-header__title">PROJETOS 2024/25</h2>
          </div>
          <Carousel />
        </div>

        <Section id="MeninasDigitais" title="Meninas Digitais">
          <p>
            A partir de 2024, o Program.Ada passou a integrar o Programa Meninas
            Digitais, uma iniciativa da Sociedade Brasileira de Computação
            (SBC), voltada à valorização e incentivo da participação feminina na
            área de Tecnologia da Informação (TI).
          </p>
          <p>
            O Meninas Digitais nasceu a partir de discussões realizadas no Women
            in Information Technology (WIT), evento que compõe o Congresso da
            SBC. Desde 2007, o WIT tem como propósito debater questões de gênero
            na TI no Brasil, destacando histórias de sucesso, políticas de
            incentivo e estratégias de engajamento para atrair jovens –
            especialmente mulheres – às carreiras ligadas à computação e à
            tecnologia.
          </p>
          <p>
            Para ampliar seu alcance em todo o país, o programa conta com a
            atuação de Projetos Parceiros, que desenvolvem ações locais
            alinhadas aos objetivos do Meninas Digitais, fortalecendo a rede de
            multiplicadoras dessa iniciativa. Além disso, o programa se sustenta
            graças ao apoio de empresas e instituições parceiras, já que a SBC é
            uma entidade sem fins lucrativos e suas atividades são conduzidas
            por pessoas voluntárias.
          </p>
          <p>
            Ao integrar o Meninas Digitais, o Program.Ada fortalece ainda mais
            sua missão de incentivar a participação feminina na área de
            tecnologia, ampliando seu impacto dentro e fora da universidade, em
            sintonia com uma rede nacional de iniciativas que compartilham do
            mesmo ideal.
          </p>
          <p>
            Para maiores informações do programa, acesse o Link:
            <a href="https://meninas.sbc.org.br/">
              https://meninas.sbc.org.br/
            </a>
          </p>
        </Section>

        <div id="Integrantes" className="window-container">
            <div className="window-header">
                <h2 className="window-header__title">INTEGRANTES</h2>
            </div>
            <GridParticipantes />
        </div>
        
        <div id="ContateNos" className="window-container">
          <div className="window-header">
            <h2 className="window-header__title">CONTATE-NOS</h2>
          </div>
          <Contact />
        </div>
      </main>

      <Footer />

      <BackToTopButton />
    </>
  );
}

export default App;
