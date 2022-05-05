import React from 'react';
import HomePage from "./page/HomePage"
import MusicListPage from "./page/MusicListPage";

class App extends React.Component {
  state = {
    telaAtual: "HomePage"
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "HomePage":
        return <HomePage irParaLista={this.irParaLista} />
      case "lista":
        return <MusicListPage irParaCadastro={this.irParaCadastro}/>
        default:
        return <div> Erro! Página não encontrada </div>
    }
  }
  irParaCadastro = () => {
    this.setState({ telaAtual: "HomePage" })
  }
  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }


  render() {
    return (
      <main>
        
        {this.escolheTela()}
      </main>
    );
  }
}

export default App;

