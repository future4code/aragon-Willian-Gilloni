import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import will from './img/will.jpg'
import lui from './img/lui.jpg'
import valdomira from './img/valdomira.jpg'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    nomeInput: "",
    nome2Input: "",
    nome3Input: "",

    listaDePessoas: [
      {
        nome: "Willian",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nome: "Valdomira",
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nome: "Luiz",
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      },
    ]
  }

  onSubmitForm = (event) => {
    event.preventDefault()

    const novaListaDePessoas = [...this.state.listaDePessoas]
    novaListaDePessoas.push({
      nome: this.state.nomeInput,
      nome2: this.state.nome2Input,
      nome3: this.state.nome3Input,
    })

    this.setState({ listaDepessoas: novaListaDePessoas })
  }
  render() {
    return (

      <MainContainer>
        <form onSubmit={this.onSubmitForm}>
          <label for="">
            <input
              name="Nome"
              placeholder='Nome'
              value={this.state.nomeInput}
              onChange={this.onChangeNome}
            />
          </label>

          <label>
            <input
              name="fotoUsuario"
              placeholder='fotoUsuario'
              value={this.state.nome2Input}
              onChange={this.onChangeNome}
            />
          </label>
          <label for="">
            <input
              name="fotoPost"
              placeholder='fotoPost'
              value={this.state.nome3Input}
              onChange={this.onChangeNome}
            />
          </label>

          <button>Adicionar</button>
        </form>
        {this.state.listaDePessoas.map((pessoa) => {
          console.log(pessoa)
          return <Post
            nomeUsuario={pessoa.nome}
            fotoUsuario={pessoa.fotoUsuario}
            fotoPost={pessoa.fotoPost}
          />
        })}
      </MainContainer>
    );
  }
}
{/* <Post
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
        /> */}




export default App;
