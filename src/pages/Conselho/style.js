import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
flex-direction: column;
display: flex;
`;

export const Header = styled.div`
flex: 0.1;
width: 90%;
padding-top: 20px;
margin: 0 auto;

div{
  line-height:2px;
}
div h2 {
  font-size: 1.4rem;
  color: #BAA193;
}

div h1{
  font-size: 2.9rem;
  color: #72005F;
  font-weight: 900;
}
`;

export const Main = styled.div`
flex: 1;
width: 90%;
margin: 0 auto;
`;

export const Card = styled.div`
flex: 1;
height:100%;
width:90%;
margin: 0 auto;
display: flex;
  justify-content: center;
  align-items: center;

div{
  border-radius: 10px;
  height: 350px;
  display: flex;
  background-color: #EBE4E0;
  justify-content: center;
  align-items: center;
}
div p{
  padding: 40px;
  width: 300px;
  text-align:start;
  line-height: 1.4;
  font-size:2rem;
  font-weight: 700;
  color: #732E5F;
  word-wrap: break-word;
}

div strong{
  color: #977c6d;
  font-weight: 300;
}

div img {
  border-radius: 10px;
}
`;