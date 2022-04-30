import React from 'react';
import './App.css';
import styled from 'styled-components'
import { FormaMensagem } from './components/FormaMensagem';

const AppContainer = styled.div`
  max-width: 600px;
  height: 100vh;
  border: 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
`

const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`

const BoldText = styled.span`
  font-weight: bold;
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({ messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {
            this.state.messages.map((message, index) => <p key={index}><BoldText>{message.user}</BoldText>{': ' + message.text}</p>)
          }
        </MessagesContainer>
        <FormaMensagem addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;
