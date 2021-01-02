import React from 'react';
import { Container, GoatContainer, TextContainer } from './style';
import bodezinho from '../../assets/bodezinho.png';

function HomePage() {
 return(
   <Container>
     <TextContainer>
      <div>
        <h2>Wise</h2>
        <h1>Goat</h1>
        <button>Pedir Conselho</button>
      </div>
     </TextContainer>

     <GoatContainer>
      <div>
        <img width={400} height={400} src={bodezinho} alt="bodezinho" />
      </div>
     </GoatContainer>
   </Container>
 );
};

export default HomePage;