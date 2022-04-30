import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import perfil from './img/will.jpg';
import email from './img/gmail.png';
import endereco from './img/endereco.png';
import RD from './img/rd.png';
import Hospital from './img/hospital.jpg';
import seta from './img/seta.png';
 import styled from 'styled-components';

 const AppStyled = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

 .page-section-container {
  width: 40vw;
  margin: 10px 0;
 }

 .page-section-container > h3 {
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

  `


function App() {
  return (
    <AppStyled>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={perfil}
          nome="Curriculo Willian Guimarães Gilloni" 
          descricao="Olá,me chamo Willian Guimarães Gilloni,realizei uma transição de 
          carreira de medicina veterinária para a área de programação,aonde 
          estou concluindo curso de full-stack na labenu."
        />
        
        <ImagemButton 
          imagem={seta}
          texto="Ver mais"
        />
          <CardPequeno
          imagem={email}
          email="Email: willianggvet@gmail.com"
        />
          <CardPequeno
          imagem={endereco}
          endereco="Endereço: Rua da Labenu"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={RD}
          nome="RaiaDrogasil" 
          descricao="Contratado como desenvolvedor 1" 
        />
        
        <CardGrande 
          imagem={Hospital}
          nome="Hospital veterinário de souzas-Campinas" 
          descricao="Projetista durante 1 ano e 8 meses" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook"
          // link="https://facebook.com"  
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter"
          // link="https://twitter.com"
        />        
      </div>
    </AppStyled>
  );
}

export default App;
