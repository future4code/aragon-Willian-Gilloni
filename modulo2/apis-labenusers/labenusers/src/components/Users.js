import React from "react";
import styled from "styled-components";
import axios from "axios";
import UserDetail from "./UserDetail";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

const axiosConfig = {
  headers: {
    Authorization: "willian-gilloni-aragon"
  }
};
const header = {
  headers: {
    Authorization: "willian-gilloni-aragon"
  }
};

class Users extends React.Component {
  state = {
    usersList: [],
    currentPage: "usersList",
    userId: "",
    name: ""
  };

  componentDidMount() {
    this.UsersList();
  }

  UsersList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usersList: response.data });
      });
  };

  UserDeletion = userId => {
    if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          header
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.UsersList();
        })
        .catch(e => {
          alert("ERRO AO APAGAR USUARIO");
        });
    }
  };

  changePage = userId => {
    if (this.state.currentPage === "usersList") {
      this.setState({ currentPage: "userDetail", userId: userId });
    } else {
      this.setState({ currentPage: "usersList", userId: "" });
    }
  };

  NameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users${this.state.name
        }&email=`,
        header
      )
      .then(response => {
        this.setState({ usersList: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.currentPage === "usersList" ? (
          <div>
            <ul>
              {this.state.usersList.length === 0 && <div>Carregando...</div>}
              {this.state.usersList.map(user => {
                return (
                  <li>
                    <span onClick={() => this.changePage(user.id)}>
                      {user.name}
                    </span>
                    <DeleteButton
                      onClick={() => this.UserDeletion(user.id)}
                    >
                      X
                    </DeleteButton>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.NameChange}
            />
            <button onClick={this.SearchUser}>Salvar edição</button>
          </div>
        ) : (
          <UserDetail userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default Users;
