import React, {useState, useEffect} from 'react';
import { Container, Header, Main, Card } from './style';
import { Link } from 'react-router-dom';

function Conselho() {
  const [conselho, setConselho] = useState('');

  function buscarConselho() {
    let buscaApi;
    fetch('https://api.adviceslip.com/advice',{method:'get'})
    .then(res=>res.json())
    .then(res=>{
      buscaApi = res['slip'].advice;
      buscaApi = `" ${buscaApi} "`;
      setConselho(buscaApi);
    });
  }
  useEffect(()=>{
    buscarConselho();
  },[])
  
  return(
    <Container>
      <Header>
        <Link to="/" style={{textDecoration:'none'}}>
          <div>
            <h2>Wise</h2>
            <h1>Goat</h1>
          </div>
        </Link>
        
      </Header>

      <Main>
        <Card>
          <div>
            <p>{conselho}<br/>
              <strong>-goat</strong>
            </p>
            <img src="http://placegoat.com/350/350" alt="bode"/>
          </div>
        </Card>
      </Main>
    </Container>
  );
}

export default Conselho;