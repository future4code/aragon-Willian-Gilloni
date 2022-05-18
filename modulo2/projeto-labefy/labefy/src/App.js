import React from 'react';
import HomePage from "./page/HomePage";
import ListaDeMusicas from "./page/ListaDeMusicas";

class App extends React.Component {
  state = {
    telaAtual: "homepage",
    musicaClicadaUrl:""
  }

  goToDetailPAge = (url) => {
    this.setState({telaAtual:"detail", musicaClicada:url })
  }

  irParaHomePage = () => {
    this.setState({ telaAtual: "homepage" })
  }
  irParaLista = () => {
    this.setState({ telaAtual: "lista" })
  }
  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "homepage":
        return <HomePage irParaLista={this.irParaLista} />
      case "lista":
        return <ListaDeMusicas irParaHomePage={this.irParaHomePage}/>
        default:
          return <HomePage url={this.state.musicaClicadaUrl} />
        
    }
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

