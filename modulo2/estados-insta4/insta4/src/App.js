import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import will from './img/will.jpg'
import lui from './img/lui.jpg'
import valdomira from './img/valdomira.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Willian'}
          fotoUsuario={will}
          fotoPost={will}
        />
        <Post
        nomeUsuario={'Valdomira'}
        fotoUsuario={valdomira}
        fotoPost={valdomira}
        />
        <Post
        nomeUsuario={'Luiz'}
        fotoUsuario={lui}
        fotoPost={lui}
        />
      </MainContainer>
    );
  }
}

export default App;
