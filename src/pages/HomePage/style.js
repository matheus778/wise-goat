import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height:100vh;
display: flex;
`;

export const TextContainer = styled.div`
flex:1;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 100px;

div{
  line-height:2px;
}
div h2 {
  font-size: 4rem;
  color: #BAA193;
}

div h1{
  font-size: 8rem;
  color: #72005F;
  font-weight: 900;
}

button {
  width: 100%;
  height: 66px;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: #72005F;
  color: white;
  font-size: 1.8rem;
  font-weight: 900;
  transition: opacity 1s;
  cursor: pointer;
}

button:hover{
  opacity: 0.7;
}
`;

export const GoatContainer = styled.div`
flex:1;
display: flex;
justify-content: flex-start;
align-items: center;
`;