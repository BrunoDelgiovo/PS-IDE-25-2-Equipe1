import React from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import GridParticipantes from './components/GridParticipantes';

import './App.css';

import logoImage from './images/Program_Ada.png';

function App() {
  return (
    <>
      <section id="Logo" className="logo-section">
            <img src={logoImage} alt="Logo do Program.Ada" className="logo-image" />
        </section>

      <main className="page-container main-content">

        <Section id="QuemSomos" title="Quem somos nós?">
            <p>O Program.Ada nasceu no Instituto de Informática da UFRGS em 2017, com o intuito de criar um elo para enfrentar situações de assédio vividas na academia. A partir disso, criou-se a Comissão de Relacionamentos do INF e o Coletivo de Mulheres na Computação.</p>
            <p>No começo, o coletivo ainda não possuía um nome. Com o tempo, percebemos a importância de celebrar a trajetória de Ada Lovelace, a primeira programadora da história, e assim surgiu o Programa.Ada.</p>
            <p>Desde então, realizamos rodas de conversa, palestras e oficinas, eventos que fortalecem o protagonismo das mulheres na tecnologia e promovem reflexões sobre gênero e inclusão na comunidade acadêmica e fora dela.</p>
        </Section>

        <Section id="NossosObjetivos" title="Nossos Objetivos">
            <ul className="list">
                <li>Construir um espaço seguro e acolhedor, onde mulheres possam compartilhar experiências, trocar ideias e se apoiar mutuamente.</li>
                <li>Apoiar a inserção de mulheres no mercado de tecnologia, desde o estímulo à participação em networking até suporte na elaboração de currículos e em projetos de portfólio.</li>
                <li>Promover atividades e eventos para a comunidade, ampliando as discussões sobre o papel das mulheres na tecnologia e sua atuação no mercado de trabalho.</li>
                <li>Contribuir para um ambiente mais inclusivo e amigável para mulheres, incentivando o respeito, a diversidade e a equidade de gênero.</li>
            </ul>
        </Section>

        <Section id="Projetos" title="Projetos">
            <p>Slider para projetos</p>
        </Section>

        <Section id="MeninasDigitais" title="Meninas Digitais">
             <p>A partir de 2024, o Program.Ada passou a integrar o Meninas Digitais UFRGS, uma iniciativa da Sociedade Brasileira de Computação (SBC) voltada a valorizar e incentivar a participação feminina na área de Tecnologia da Informação (TI).</p>
             <p>O Meninas Digitais nasceu a partir de discussões realizadas no Women in Information Technology (WIT), evento que compõe o Congresso da SBC desde 2007, e se tornou o primeiro projeto sobre questões de gênero na TI no Brasil. Posteriormente, a iniciativa criou políticas de incentivo e normativas de engajamento para atrair mais meninas/mulheres para as carreiras ligadas à computação e à tecnologia.</p>
        </Section>
        
              <GridParticipantes />

        <Section id="ContateNos" title="Contate-nos">
            <p>Formulário de contato</p>
        </Section>
      </main>

      <Footer />
    </>
  );
}

export default App;